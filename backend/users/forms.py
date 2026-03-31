from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser, Profile


class UserRegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email']

    # ADD THIS TO HIDE THE TEXT:
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # This removes the password rule text
        self.fields['username'].help_text = ''
        
        # Depending on your Django version, the password field might be named differently
        # Usually it's password1, but we can loop through to be safe:
        for field in self.fields:
            self.fields[field].help_text = ''    


class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email'] 


class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['image']        


