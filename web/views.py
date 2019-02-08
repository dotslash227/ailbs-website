from django.shortcuts import render
from .models import HomeSlider, InternationalFaculty, SurgeryFaculty, AnasthesiaFaculty, HepatologyFaculty
from .models import News, Downloads, Agenda15, Agenda16, Agenda17, Agenda172, Sponsors

def index(request):
    slides = HomeSlider.objects.all().order_by("?")
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

def programeglance(request):
  agenda15 = Agenda15.objects.all().values("time_range", "title").order_by("time_range")
  agenda16 = Agenda16.objects.all().values("time_range", "title").order_by("time_range")
  agenda17 = Agenda17.objects.all().values("time_range", "title").order_by("time_range")
  agenda172 = Agenda172.objects.all().values("time_range", "title").order_by("time_range")

  return render(request, "glance.html", {
    "a1": agenda15, "a2":agenda16, "a3":agenda17, "a4":agenda172
  })


def dailyprogram(request):
  agenda15 = Agenda15.objects.all()
  agenda16 = Agenda16.objects.all()
  agenda17 = Agenda17.objects.all()
  agenda172 = Agenda172.objects.all()

  return render(request, "dp.html", {
    "a1": agenda15, "a2":agenda16, "a3":agenda17, "a4":agenda172
  })

def sponsorPage(request):
  sponsors = Sponsors.objects.all().order_by("?")

  return render(request, "sponsors.html", {
    "sponsors": sponsors,
  })
