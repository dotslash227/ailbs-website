from django.shortcuts import render
from .models import HomeSlider, InternationalFaculty, SurgeryFaculty, AnasthesiaFaculty, HepatologyFaculty

def index(request):
    slides = HomeSlider.objects.all()
    surgery = SurgeryFaculty.objects.all().order_by("name")
    anes = AnasthesiaFaculty.objects.all().order_by("name")
    hepa = HepatologyFaculty.objects.all().order_by("name")
    interfac = InternationalFaculty.objects.all().order_by("name")

    return render(request, "index.html", {
    "slides":slides, "interfac": interfac,
    "surgery": surgery, "anes": anes, "hepa": hepa,
    })


def contact(request):

    return render(request, "contact.html", {
        
    })

def interfac(request):    
    surgery = SurgeryFaculty.objects.all().order_by("name")
    anes = AnasthesiaFaculty.objects.all().order_by("name")
    hepa = HepatologyFaculty.objects.all().order_by("name")
    interfac = InternationalFaculty.objects.all().order_by("name")

    return render(request, "interfac.html", {
      "interfac": interfac,
      "surgery": surgery, "anes": anes, "hepa": hepa,
    })