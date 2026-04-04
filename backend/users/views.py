import json
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout, get_user_model
from .forms import UserRegisterForm, UserUpdateForm, ProfileUpdateForm
from django.middleware.csrf import get_token
from django.contrib.auth.forms import PasswordResetForm
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import force_str
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail 
from django.dispatch import receiver
from allauth.account.signals import user_signed_up
from django.conf import settings
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django_ratelimit.decorators import ratelimit
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie



def home(request):
    return render(request, "index.html")


# This gives your frontend the secret token
@ensure_csrf_cookie
def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrfToken': token})
 

def register(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST allowed'}, status=405)

    try:
        data = json.loads(request.body)
        form = UserRegisterForm(data)
        if form.is_valid():
            user = form.save()
            login(request, user, backend='django.contrib.auth.backends.ModelBackend')

            try:
                send_mail(
                    subject="Welcome to Ronin!",
                    message=f"Hi {user.username},\n\nWelcome to Ronin!",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[user.email],
                    fail_silently=False,
                    html_message=f"""
                    <html>
                        <body>
                            <h2>Hi {user.username},</h2>
                            <p>Welcome to Ronin!</p>
                        </body>
                    </html>
                    """
                )
            
            except Exception as e:
            # You can log the error, but still let the user register successfully
                print("Email failed to send:", str(e))

        # 4. Finally, return the success message to the frontend
            return JsonResponse({"success": True, "message": "User created successfully"})

        else:
            return JsonResponse({
                'success': False,
                'errors': form.errors
            }, status=400)

    except Exception as e:
        return JsonResponse({
            'success': False,
            'error': str(e)
        }, status=400)


def profile(request):
    # 1. Ensure the user is logged in
    if not request.user.is_authenticated:
        return JsonResponse({'success': False, 'error': 'You must be logged in.'}, status=401)

    # 2. GET REQUEST: Send the current user data to the frontend
    if request.method == 'GET':
        return JsonResponse({
            'success': True,
            'message': 'Data loaded successfully!',
            'data': {
                'username': request.user.username,
                'email': request.user.email,
            }
        })

    # 3. POST REQUEST: Update the user's data
    if request.method == 'POST':
        # Check if the frontend sent FormData (multipart) or JSON
        if request.content_type == 'application/json':
            data = json.loads(request.body)
        else:
            data = request.POST

        # Pass the data to the form, linked to the currently logged-in user
        form = UserUpdateForm(data, instance=request.user)

        if form.is_valid():
            form.save()
            return JsonResponse({
                'success': True, 
                'message': 'Profile updated successfully!',
                'data': {
                    'username': request.user.username,
                    'email': request.user.email,
                }
            })
        else:
            # If the form is invalid (e.g., email already exists)
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)

    # If it's not GET or POST
    return JsonResponse({'success': False, 'error': 'Method not allowed.'}, status=405)


# This automatically grabs your 'users.CustomUser' model!
User = get_user_model()

@ratelimit(key='ip', rate='5/m', block=False)
def login_api(request):

    # 1. Check if the user is rate-limited first!
    if getattr(request, 'limited', False):
        return JsonResponse({
            'success': False,
            'error': 'Too many login attempts. Try again in a minute.'
        }, status=429) # 429 = Too Many Requests


    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            # Your JS sends the value under the key 'email'
            login_id = data.get('email', '').strip() 
            password = data.get('password', '')

            User = get_user_model()
            username_to_check = None

            # 1. SMART CHECK: Is it an email or a username?
            if '@' in login_id:
                # It's an email! Find the user with this email to get their username
                user_obj = User.objects.filter(email=login_id).first()
                if user_obj:
                    username_to_check = user_obj.username
            else:
                # It doesn't have an @, so it must be a username!
                username_to_check = login_id

            # 2. AUTHENTICATE
            # (Django's default authenticate usually expects the 'username' keyword)
            user = authenticate(request, username=username_to_check, password=password)

            if user is not None:
                login(request, user) # Creates the session cookie!
                return JsonResponse({"success": True, "message": "Login successful!"})
            else:
                return JsonResponse({"success": False, "error": "Invalid username/email or password."})

        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)})
            
    return JsonResponse({"success": False, "error": "Only POST requests are allowed."})
    

@ratelimit(key='ip', rate='3/h', block=False)
def password_reset_api(request):

    if getattr(request, 'limited', False):
        return JsonResponse({'error': 'Please wait an hour before requesting another email.'}, status=429)

    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST allowed'}, status=405)

    try:
        data = json.loads(request.body)
        email = data.get('email')

        if not email:
            return JsonResponse({'success': False, 'error': 'Email is required.'}, status=400)

        # Use Django's built-in form to handle finding the user and sending the email
        form = PasswordResetForm(data={'email': email})
                # Inside password_reset_api in views.py:
        if form.is_valid():
            form.save(
                request=request,
                use_https=request.is_secure(),
                domain_override='localhost:5173',
                # Add this exact line!
                email_template_name='registration/password_reset_email.html'
            )
            return JsonResponse({'success': True, 'message': 'Password reset email sent.'})
        
        return JsonResponse({'success': False, 'error': 'Invalid email format.'}, status=400)

    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)}, status=400)


def password_reset_confirm_api(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST allowed'}, status=405)

    try:
        data = json.loads(request.body)
        uidb64 = data.get('uid')
        token = data.get('token')
        new_password = data.get('new_password')

        if not uidb64 or not token or not new_password:
            return JsonResponse({'success': False, 'error': 'Missing required fields.'}, status=400)

        # 1. Decode the UID to find the user
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
            try:
                validate_password(new_password, user)
            except ValidationError as e:
                return JsonResponse({'success': False,'errors': e.messages}, status=400)
            
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        # 2. Check if the user exists and the token is valid/not expired
        if user is not None and default_token_generator.check_token(user, token):
            # 3. Success! Set the new password securely
            user.set_password(new_password)
            user.save()
            return JsonResponse({'success': True, 'message': 'Password has been reset successfully.'})
        else:
            return JsonResponse({'success': False, 'error': 'The reset link is invalid or has expired.'}, status=400)

    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)}, status=400)


from django.http import JsonResponse

def check_auth_status(request):
    # If the user is logged in, tell the frontend "True"
    if request.user.is_authenticated:
        return JsonResponse({'is_authenticated': True})
    # Otherwise, tell the frontend "False"
    return JsonResponse({'is_authenticated': False})


def custom_logout(request):
    logout(request) # Destroys the secure cookie
    return JsonResponse({'success': True, 'message': 'Logged out successfully.'})


# users/models.py
from django.core.mail import send_mail
from .tasks import send_welcome_email_task

@receiver(user_signed_up)
def send_google_welcome_email(request, user, **kwargs):
    if user.email:
        send_welcome_email_task.delay(user.username, user.email)