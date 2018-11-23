from django.shortcuts import render
from .models import HomeSlider, InternationalFaculty, SurgeryFaculty, AnasthesiaFaculty, HepatologyFaculty

def index(request):
    slides = HomeSlider.objects.all()
    surgery = SurgeryFaculty.objects.all()
    anes = AnasthesiaFaculty.objects.all()
    hepa = HepatologyFaculty.objects.all()
    interfac = InternationalFaculty.objects.all()

    return render(request, "index.html", {
    "slides":slides, "interfac": interfac,
    "surgery": surgery, "anes": anes, "hepa": hepa,
    })


def contact(request):

    return render(request, "contact.html", {
        
    })

def interfac(request):    
    interfac = InternationalFaculty.objects.all()
    surgery = SurgeryFaculty.objects.all()
    anes = AnasthesiaFaculty.objects.all()
    hepa = HepatologyFaculty.objects.all()

    return render(request, "interfac.html", {
      "interfac": interfac,
      "surgery": surgery, "anes": anes, "hepa": hepa,
    })