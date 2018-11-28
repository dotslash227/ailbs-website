from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

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
    ffname = models.CharField(max_length=50)
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