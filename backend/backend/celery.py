import os
from celery import Celery

# Set default Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings') # Change 'backend' to your actual project folder name if different

app = Celery('backend')

# Load settings from Django settings.py starting with "CELERY_"
app.config_from_object('django.conf:settings', namespace='CELERY')

# Auto-discover tasks in all your installed apps
app.autodiscover_tasks()