from django.shortcuts import render
from django.http import JsonResponse
from products.models import NewArrivalProducts, Videos, Articles, BannerImage


def getNewArrivalProducts(request):
    data = []
    for n in NewArrivalProducts.objects.all():
        data.append({
            "category" : n.category,
            "title" : n.title,
            "description" : n.description,
            "image_url" : n.image_url.url,
            "imgVariant1" : n.imgVariant1.url,
            "imgVariant2" : n.imgVariant2.url,
            "oldPrice" : n.oldPrice,
            "newPrice" : n.newPrice,
        })
    return JsonResponse(data, safe=False)


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


def get_images(request):
    desktop = []
    mobile = []

    images = BannerImage.objects.all()

    for img in images:
        if img.image_type == 'desktop':
            desktop.append(img.image.url)
        elif img.image_type == 'mobile':
            mobile.append(img.image.url)

    return JsonResponse({
        "desktopImages": desktop,
        "mobileImages": mobile
    })