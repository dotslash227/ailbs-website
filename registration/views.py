from django.shortcuts import render, redirect
from .models import Registration
from django.views import View
from .forms import RegistrationForm, AnesRegistrationForm, AbstractForm
from instamojo_wrapper import Instamojo

class RegistrationPage(View):
    def get(self, request):
        form = RegistrationForm()
        anesForm = AnesRegistrationForm()

        return render(request, "registration/register.html", {
            "form": form, "anesform": anesForm,
        })

    def post(self, request):
        form = RegistrationForm(request.POST)
        plan = request.POST.get("plan")

        if plan == "1":
            amount = 9999
        elif plan == "2":
            amount = 8000
        elif plan == "3":
            amount = 6000
        elif plan == "4":
            amount = 4000
        
        accompany = request.POST.get("accompany")
        if accompany == "True":
            amount = amount + 4000
        
        amount = str(amount)

        registration = form.save(commit=False)        
        registration.amount = amount
        registration.save()

        return render(request, "registration/success.html", {})


def registrationAnesthesia(request):
    form = AnesRegistrationForm(request.POST)
    form.save()

    return render(request, "registration/success-a.html", {

    })


class Abstract(View):
    def get(self, request):
        form = AbstractForm()
        return render(request, "registration/abstract.html", {
            "form": form, "flag":True
        })
    
    def post(self, request):
        form = AbstractForm(request.POST)
        form.save()

        return render(request, "registration/abstract.html", {
            "flag":False,
        })