from django.urls import path
from .views import getNewArrivalProducts, getVideos, getArticles 


urlpatterns = [
    path('new_arrival_products/',getNewArrivalProducts),
    path('Videos/',getVideos),
    path('Articles/',getArticles),
]