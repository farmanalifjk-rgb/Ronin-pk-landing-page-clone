from django.urls import path
from .views import getNewArrivalProducts, getVideos, getArticles, get_images 


urlpatterns = [
    path('new_arrival_products/',getNewArrivalProducts),
    path('videos/',getVideos),
    path('articles/',getArticles),
    path('bannerImages/',get_images),
]