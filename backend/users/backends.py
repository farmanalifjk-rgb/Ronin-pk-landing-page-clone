from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.db.models import Q

User = get_user_model()

class EmailPhoneUsernameBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        # 'username' here is whatever they typed into the login box
        login_input = username or kwargs.get('username') or kwargs.get('email')
        
        if not login_input:
            return None

        try:
            # Search for a user where the input matches Username OR Email OR Phone
            user = User.objects.get(
                Q(username=login_input) | 
                Q(email=login_input) | 
                Q(phone_number=login_input)
            )
        except User.DoesNotExist:
            return None

        # Check the password
        if user.check_password(password) and self.user_can_authenticate(user):
            return user
        return None