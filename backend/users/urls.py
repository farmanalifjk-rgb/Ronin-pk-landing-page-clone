from django.urls import path
from .views import register, profile, login_api, get_csrf_token, password_reset_api,password_reset_confirm_api, check_auth_status, custom_logout

urlpatterns = [
    path('register/', register),
    path('profile/', profile),
    path('login/', login_api ),
    path('csrf/', get_csrf_token ),
    path('password-reset/', password_reset_api ),
    path('password-reset-confirm-api/', password_reset_confirm_api ),
    path('check-auth-status/', check_auth_status ),
    path('logout/', custom_logout ),
]