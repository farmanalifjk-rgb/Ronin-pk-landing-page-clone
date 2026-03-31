from django.contrib import admin
from products.models import NewArrivalProducts,Category,CategoryProducts


class AdminNewArrivalProducts(admin.ModelAdmin):
    list_display = ('category','title','description','image_url','imgVariant1','imgVariant2','oldPrice','newPrice')

admin.site.register(NewArrivalProducts,AdminNewArrivalProducts)


admin.site.register(Category)
admin.site.register(CategoryProducts)


