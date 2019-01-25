from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils import timezone

class HomeSlider(models.Model):
    image = models.FileField(max_length=250, upload_to="slides")
    content = RichTextUploadingField(blank=True, null=True)

    def __str__(self):
        return self.content


class InternationalFaculty(models.Model):
    fname = models.CharField(max_length=150)
    lname = models.CharField(max_length=150, blank=True, null=True)
    country = models.CharField(max_length=150)
    image = models.FileField(max_length=250, upload_to="faculties", blank=True, null=True)
    cv = models.FileField(max_length=250, upload_to="faculties/cv", blank=True, null=True)

    def __str__(self):
        return self.fname

class SurgeryFaculty(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=50)

    def __str__(self):
        return self.fname

class HepatologyFaculty(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=50)

    def __str__(self):
        return self.fname

class AnasthesiaFaculty(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=50)

    def __str__(self):
        return self.fname


class Downloads(models.Model):
    name = models.CharField(max_length=500)
    dfile = models.FileField(max_length=150, upload_to="downloadfiles")

    def __str__(self):
        return self.name

class News(models.Model):
    title = models.CharField(max_length=500)
    image = models.FileField(max_length=500, upload_to="images-news")
    description = models.TextField(blank=True, null=True)
    content = RichTextUploadingField(blank=True, null=True)

    def __str__(self):
        return self.title


class Agenda15(models.Model):
    date = models.DateField(default=timezone.now)
    time_range = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=150)
    venue = models.CharField(max_length=150)
    speaker = models.CharField(max_length=150, blank=True, null=True)
    description = RichTextUploadingField(blank=True, null=True)    
    dp = models.BooleanField(blank=True, null=True)
    single = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return self.title

class Agenda16(models.Model):
    date = models.DateField(default=timezone.now)
    time_range = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=150)
    venue = models.CharField(max_length=150)
    speaker = models.CharField(max_length=150, blank=True, null=True)
    description = RichTextUploadingField(blank=True, null=True)
    dp = models.BooleanField(blank=True, null=True)
    single = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return self.title

class Agenda17(models.Model):
    date = models.DateField(default=timezone.now)
    time_range = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=150)
    venue = models.CharField(max_length=150)
    speaker = models.CharField(max_length=150, blank=True, null=True)
    description = RichTextUploadingField(blank=True, null=True)    
    dp = models.BooleanField(blank=True, null=True)
    single = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return self.title

class Agenda172(models.Model):
    date = models.DateField(default=timezone.now)
    time_range = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=150)
    venue = models.CharField(max_length=150)
    speaker = models.CharField(max_length=150, blank=True, null=True)
    description = RichTextUploadingField(blank=True, null=True)    
    dp = models.BooleanField(blank=True, null=True)
    single = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return self.title