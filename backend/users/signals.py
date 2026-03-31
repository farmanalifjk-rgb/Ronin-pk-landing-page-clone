from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from .tasks import send_welcome_email_task  # Import your new task!

User = get_user_model()

@receiver(post_save, sender=User)
def create_user_profile_and_send_email(sender, instance, created, **kwargs):
    if created:
        # 1. Create Profile (if you have one)
        # Profile.objects.create(user=instance)
        
        # 2. Add to Excel Sheet
        # append_to_excel(instance)
        
        # 3. Send email IN THE BACKGROUND using .delay()
        send_welcome_email_task.delay(instance.username, instance.email)