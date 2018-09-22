from django.db import models
from django.utils import timezone

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
    accompanying_registration_number = models.CharField(max_length=150, blank=True, null=True, verbose_name="Medical Council Registration Number of accompanying person, if any")
    mode_of_payment = models.CharField(max_length=25, blank=True, null=True)
    txnid = models.CharField(max_length=25, blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)
    status = models.CharField(max_length=25, blank=True, null=True)
    plan = models.IntegerField(blank=True, null=True, choices=(
        (1, "Workshop (Delegate)"),
        (2, "Workshop (Trainee)"),
        (3, "Delegate (National)"),
        (4, "Trainees (National)"),        
    ), verbose_name="Choose your registration type")

    def __str__(self):
        return self.first_name + " " + self.last_name

