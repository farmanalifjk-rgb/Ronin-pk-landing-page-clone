from django.shortcuts import render
from django.http import JsonResponse
from products.models import NewArrivalProducts


def getNewArrivalProducts(request):
    data = list(NewArrivalProducts.objects.values())
    return JsonResponse(data , safe=False)



