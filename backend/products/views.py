from django.shortcuts import render
from django.http import JsonResponse
from products.models import NewArrivalProducts, Videos, Articles


def getNewArrivalProducts(request):
    data = list(NewArrivalProducts.objects.values())
    return JsonResponse(data , safe=False)


def getVideos(request):
    data = []
    for v in Videos.objects.all():
        data.append({
            "Videolink": v.Videolink,
            "ImageLink": v.ImageLink,
            "Name": v.Name,
            "profession": v.profession,
        })
    return JsonResponse(data, safe=False)


def getArticles(request):
    data = []
    for v in Videos.objects.all():
        data.append({
            "TrendingImage": v.TrendingImage,
            "TrendingTitle": v.TrendingTitle,
            "TrendingDescription": v.TrendingDescription,
        })
    return JsonResponse(data, safe=False)



