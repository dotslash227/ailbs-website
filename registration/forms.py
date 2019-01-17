from django import forms
from django.forms import ModelForm
from .models import Registration, AnesthesiaRegistration, AbstractSubmission
from ckeditor.widgets import CKEditorWidget

class RegistrationForm(ModelForm):
    class Meta:
        model = Registration
        exclude = ["amount", "status", "txnid", "mode_of_payment", "date_added"]

class AnesRegistrationForm(ModelForm):
    class Meta:
        model = AnesthesiaRegistration
        exclude = ["date_added"]  

class AbstractForm(ModelForm):
    class Meta:
        model = AbstractSubmission
        exclude = ["date_added"]
        widgets = {
            "content": CKEditorWidget(),
        }