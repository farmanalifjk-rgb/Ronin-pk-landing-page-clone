from django.shortcuts import render
from django.http import JsonResponse
from products.models import NewArrivalProducts, Videos, Articles, CategoryProducts, BannerImage


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


def getNavbarData(request):
    # .select_related('Category') optimizes the database query by fetching 
    # the product and its related category at the same time.
    products = CategoryProducts.objects.select_related('Category').all()
    
    data = []
    for product in products:
        # Safely get the image URL (prevents errors if an image is missing)
        img_url = product.image.url if product.image else ""

        data.append({
            # Get the name of the Category it belongs to (e.g., "Earbuds", "Handsfree")
            "category": product.Category.name if product.Category else "",
            
            # Product details
            "name": product.name,
            "img": img_url,
            
            # Tailwind CSS classes straight from your database
            "peding1": product.peding1 or "",
            "width1": product.width1 or "",
            "height1": product.height1 or "",
            "width2": product.width2 or "",
            "top1": product.top1 or "",
            "left1": product.left1 or "",
            "left2": product.left2 or "",
            "top2": product.top2 or "",
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