from django.shortcuts import render
from django.http import JsonResponse
from products.models import NewArrivalProducts, Videos, Articles


def getNewArrivalProducts(request):
    data = list(NewArrivalProducts.objects.values())
    return JsonResponse(data , safe=False)


def getVideos(request):
    data = list(Videos.objects.values())
    return JsonResponse(data , safe=False)


def getArticles(request):
    data = list(Articles.objects.values())
    return JsonResponse(data , safe=False)



