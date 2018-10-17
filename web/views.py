from django.shortcuts import render
from .models import HomeSlider, NationalFaculty, InternationalFaculty

def index(request):
    slides = HomeSlider.objects.all()
    nationalfac = NationalFaculty.objects.all()
    interfac = InternationalFaculty.objects.all()

    return render(request, "index.html", {
    "slides":slides, "nationalfac": nationalfac, "interfac": interfac,
    })


def contact(request):

    return render(request, "contact.html", {
        
    })

def interfac(request):
    nationalfac = NationalFaculty.objects.all()
    interfac = InternationalFaculty.objects.all()

    return render(request, "interfac.html", {
      "nationalfac": nationalfac, "interfac": interfac,  
    })