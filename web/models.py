from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

class HomeSlider(models.Model):
    image = models.FileField(max_length=250, upload_to="slides")
    content = RichTextUploadingField(blank=True, null=True)

    def __str__(self):
        return self.content


class InternationalFaculty(models.Model):
    name = models.CharField(max_length=150)
    country = models.CharField(max_length=150)
    image = models.FileField(max_length=250, upload_to="faculties", blank=True, null=True)
    cv = models.FileField(max_length=250, upload_to="faculties/cv", blank=True, null=True)

    def __str__(self):
        return self.name

class SurgeryFaculty(models.Model):
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class HepatologyFaculty(models.Model):
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class AnasthesiaFaculty(models.Model):
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50)

    def __str__(self):
        return self.name