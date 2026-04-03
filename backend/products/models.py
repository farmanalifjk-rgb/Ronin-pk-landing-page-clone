from django.db import models
from cloudinary.models import CloudinaryField

class NewArrivalProducts (models.Model):
    category = models.CharField()
    title = models.CharField()
    description = models.TextField()
    image_url = models.FileField(upload_to ='images/',null=True,default=None)
    imgVariant1 = models.FileField(upload_to ='images/',null=True,default=None)
    imgVariant2 = models.FileField(upload_to ='images/',null=True,default=None)
    oldPrice = models.CharField(blank=True, null=True )
    newPrice = models.CharField()


class Category(models.Model):
    name = models.CharField(max_length=50)
    parent = models.ForeignKey('self',blank=True,null=True, on_delete=models.CASCADE)

    def __str__(self):
        if self.parent:
            return f"{self.parent.name} > {self.name}"
        return self.name


class CategoryProducts(models.Model):
    peding1 = models.CharField(max_length=100, null=True, blank=True)
    width1 = models.CharField(max_length=100, null=True, blank=True)
    height1 = models.CharField(max_length=100, null=True, blank=True)
    width2 = models.CharField(max_length=100, null=True, blank=True)
    top1  = models.CharField(max_length=100, null=True, blank=True)
    left1 = models.CharField(max_length=100, null=True, blank=True)
    left2  = models.CharField(max_length=100, null=True, blank=True)
    top2  = models.CharField(max_length=100, null=True, blank=True)
    image = models.FileField(upload_to='images/',null=True,default=None)
    name = models.CharField(max_length=100)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name    


class Videos(models.Model):
    Videolink = CloudinaryField('video', resource_type='video')
    ImageLink = models.FileField(upload_to='images/')
    Name = models.CharField(max_length=50)
    profession = models.CharField(max_length=50)


class Articles(models.Model):
    TrendingImage = models.FileField(upload_to='images/')
    TrendingTitle = models.TextField()
    TrendingDescription = models.TextField()


class BannerImage(models.Model):
    IMAGE_TYPE_CHOICES = [
        ('desktop', 'Desktop'),
        ('mobile', 'Mobile'),
    ]

    image = CloudinaryField('image')
    image_type = models.CharField(max_length=10, choices=IMAGE_TYPE_CHOICES)

    def __str__(self):
        return f"{self.image_type} image"
