from django.shortcuts import render
from .models import Registration
from django.views import View
from .forms import RegistrationForm

class RegistrationPage(View):
    def get(self, request):
        form = RegistrationForm()

        return render(request, "registration/register.html", {
            "form": form,
        })

    def post(self, request):
        form = RegistrationForm(request.POST)
        if form.is_valid():
            attendee = form.save()
        
        return render(request, "index.html", {})