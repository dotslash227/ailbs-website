from django.shortcuts import render
from .models import HomeSlider, InternationalFaculty, SurgeryFaculty, AnasthesiaFaculty, HepatologyFaculty
from .models import News, Downloads

def index(request):
    slides = HomeSlider.objects.all()
    surgery = SurgeryFaculty.objects.all().order_by("lname")
    anes = AnasthesiaFaculty.objects.all().order_by("lname")
    hepa = HepatologyFaculty.objects.all().order_by("lname")
    interfac = InternationalFaculty.objects.all().order_by("lname")

    return render(request, "index.html", {
    "slides":slides, "interfac": interfac,
    "surgery": surgery, "anes": anes, "hepa": hepa,
    })


def contact(request):

    return render(request, "contact.html", {
        
    })

def interfac(request):    
    surgery = SurgeryFaculty.objects.all().order_by("lname")
    anes = AnasthesiaFaculty.objects.all().order_by("lname")
    hepa = HepatologyFaculty.objects.all().order_by("lname")
    interfac = InternationalFaculty.objects.all().order_by("lname")

    return render(request, "interfac.html", {
      "interfac": interfac,
      "surgery": surgery, "anes": anes, "hepa": hepa,
    })