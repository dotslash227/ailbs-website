from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField

class Registration(models.Model):
    date_added = models.DateField(default=timezone.now)
    title = models.CharField(max_length=4, choices=(
        ("Dr.", "Dr."),
        ("Mr.", "Mr."),
        ("Mrs.", "Mrs."),
        ("Ms.", "Ms."),
        ("Sir", "Sir"),
    ))
    first_name = models.CharField(max_length=150)
    middle_name = models.CharField(max_length=150, blank=True, null=True)
    last_name = models.CharField(max_length=150)
    address = models.TextField()
    mobile = models.BigIntegerField()
    email = models.EmailField(max_length=200)
    age = models.IntegerField()
    gender = models.CharField(max_length=10, default="Male", choices=(
        ("Male", "Male"),
        ("Female", "Female"),
    ))
    hospital = models.CharField(max_length=50, blank=True, null=True)
    speciality = models.CharField(max_length=50, choices=(
        ("Surgery", "Surgery"),
        ("Hepatology", "Hepatology"),
        ("Anesthesia", "Anesthesia"),
        ("Critical Care", "Critical Care"),
        ("Pathology", "Pathology"),
        ("Radiology", "Radiology"),
        ("Others", "Others")
    ), blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    registration_number = models.CharField(max_length=100, blank=True, null=True, verbose_name="Medical Council Registration Number")    
    accompany = models.BooleanField(default=False, choices=(
        (True, "Yes"),
        (False, "No"),
    ), verbose_name="Is someone accompanying you?")
    accompanying_title = models.CharField(max_length=4, blank=True, null=True, choices=(
        ("Dr.", "Dr."),
        ("Mr.", "Mr."),
        ("Mrs.", "Mrs."),
        ("Ms.", "Ms."),
        ("Sir", "Sir"),
    ), verbose_name="Accompanying Person Title")
    accompanying_name = models.CharField(max_length=150, blank=True, null=True, verbose_name="Name of Accompanying Person, if any")
    accompanying_age = models.IntegerField(default=0, verbose_name="Age of Accompanying Person, if any")
    accompanying_gender = models.CharField(max_length=15, default="Male", choices=(
        ("Male", "Male"),
        ("Female", "Female"),
    ), verbose_name="Gender of accompanying person, if any")    
    mode_of_payment = models.CharField(max_length=25, blank=True, null=True)
    txnid = models.CharField(max_length=25, blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)
    status = models.CharField(max_length=25, blank=True, null=True)
    plan = models.IntegerField(default=1, choices=(
        (1, "Conference (Delegate)"),
        (2, "Conference (Trainee)"),
        (3, "Conference + Workshop (Delegate)"),
        (4, "Conference + Workshop (Trainee)"),
    ), verbose_name="Choose your registration type")

    def __str__(self):
        return self.first_name + " " + self.last_name



class AnesthesiaRegistration(models.Model):
    date_added = models.DateField(default=timezone.now)
    title = models.CharField(max_length=4, choices=(
        ("Dr.", "Dr."),
        ("Mr.", "Mr."),
        ("Mrs.", "Mrs."),
        ("Ms.", "Ms."),
        ("Sir", "Sir"),
    ))
    first_name = models.CharField(max_length=150)
    middle_name = models.CharField(max_length=150, blank=True, null=True)
    last_name = models.CharField(max_length=150)
    address = models.TextField()
    mobile = models.BigIntegerField()
    email = models.EmailField(max_length=200)
    age = models.IntegerField()
    gender = models.CharField(max_length=10, default="Male", choices=(
        ("Male", "Male"),
        ("Female", "Female"),
    ))
    hospital = models.CharField(max_length=50, blank=True, null=True)
    speciality = models.CharField(max_length=50, choices=(
        ("Surgery", "Surgery"),
        ("Hepatology", "Hepatology"),
        ("Anesthesia", "Anesthesia"),
        ("Critical Care", "Critical Care"),
        ("Pathology", "Pathology"),
        ("Radiology", "Radiology"),
        ("Others", "Others")
    ), blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    registration_number = models.CharField(max_length=100, blank=True, null=True, verbose_name="Medical Council Registration Number")        

    def __str__(self):
        return self.first_name + " " + self.last_name


class AbstractSubmission(models.Model):
    date_added = models.DateField(default=timezone.now)
    author1_name = models.CharField(max_length=150, blank=True, null=True)
    author1_email = models.CharField(max_length=150, blank=True, null=True)
    author1_institution = models.CharField(max_length=150, blank=True, null=True)
    author1_specialisation = models.CharField(max_length=150, blank=True, null=True)
    author2_name = models.CharField(max_length=150, blank=True, null=True)
    author2_email = models.CharField(max_length=150, blank=True, null=True)
    author2_institution = models.CharField(max_length=150, blank=True, null=True)
    author2_specialisation = models.CharField(max_length=150, blank=True, null=True)
    author3_name = models.CharField(max_length=150, blank=True, null=True)
    author3_email = models.CharField(max_length=150, blank=True, null=True)
    author3_institution = models.CharField(max_length=150, blank=True, null=True)
    author3_specialisation = models.CharField(max_length=150, blank=True, null=True)
    author4_name = models.CharField(max_length=150, blank=True, null=True)
    author4_email = models.CharField(max_length=150, blank=True, null=True)
    author4_institution = models.CharField(max_length=150, blank=True, null=True)
    author4_specialisation = models.CharField(max_length=150, blank=True, null=True)
    author5_name = models.CharField(max_length=150, blank=True, null=True)
    author5_email = models.CharField(max_length=150, blank=True, null=True)
    author5_institution = models.CharField(max_length=150, blank=True, null=True)
    author5_specialisation = models.CharField(max_length=150, blank=True, null=True)
    title = models.CharField(max_length=150)
    content = RichTextField(blank=True, null=True)

    def __str__(self):
        return self.title