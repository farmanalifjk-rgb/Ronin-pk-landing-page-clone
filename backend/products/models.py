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
