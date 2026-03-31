from django.urls import path
from .views import getNewArrivalProducts


urlpatterns = [
    path('new_arrival_products/',getNewArrivalProducts)
]