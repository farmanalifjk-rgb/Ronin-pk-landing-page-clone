from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings

@shared_task
def send_welcome_email_task(username, email):
    send_mail(
        subject="Welcome to Ronin!",
        message=f"Hi {username},\n\nWelcome to Ronin!",
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[email],
        fail_silently=False,
        html_message=f"""
        <html>
            <body>
                <h2>Hi {username},</h2>
                <p>Welcome to <strong>Ronin!</strong> Your account has been created successfully.</p>
            </body>
        </html>
        """
    )
    return "Email sent successfully!"