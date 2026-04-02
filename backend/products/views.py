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
            "Videolink": v.Videolink.url,
            "ImageLink": v.ImageLink.url,
            "Name": v.Name,
            "profession": v.profession,
        })
    return JsonResponse(data, safe=False)


def getArticles(request):
    data = []
    for a in Articles.objects.all():
        data.append({
            "TrendingImage": a.TrendingImage.url,
            "TrendingTitle": a.TrendingTitle,
            "TrendingDescription": a.TrendingDescription,
        })
    return JsonResponse(data, safe=False)