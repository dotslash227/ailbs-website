from django import forms
from django.forms import ModelForm
from .models import Registration

class RegistrationForm(ModelForm):
    class Meta:
        model = Registration
        exclude = ["amount", "status", "txnid", "mode_of_payment", "date_added"]