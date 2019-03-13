from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
from .models import InternationalFaculty, SurgeryFaculty, AnasthesiaFaculty, HepatologyFaculty
from .models import Downloads, News, Agenda15, Agenda16, Agenda17, Sponsors
from registration.models import Registration, AnesthesiaRegistration
from django.contrib.flatpages.models import FlatPage

@csrf_exempt
def internationalFaculty(request):
    inter = InternationalFaculty.objects.all().order_by("lname")    
    data = []
    for each in inter:
        if  not each.cv:
            cvlink = None
        else:
            cvlink = "https://www.ailbsindiaconference.com" + each.cv.url
        record = {
            "fname": each.fname,
            "lname": each.lname,
            "country": each.country,
            "image": "https://www.ailbsindiaconference.com" + each.image.url,
            "cvlink": cvlink
        }
        data.append(record)

    return JsonResponse(data, safe=False)

@csrf_exempt
def surgeryFaculty(request):
    inter = SurgeryFaculty.objects.all().order_by("lname")    
    data = []
    for each in inter:
        record = {
            "fname": each.fname,
            "lname": each.lname,
            "city": each.city,            
        }
        data.append(record)

    return JsonResponse(data, safe=False)

@csrf_exempt
def anesFaculty(request):
    inter = AnasthesiaFaculty.objects.all().order_by("lname")    
    data = []
    for each in inter:
        record = {
            "fname": each.fname,
            "lname": each.lname,
            "city": each.city,            
        }
        data.append(record)

    return JsonResponse(data, safe=False)

@csrf_exempt
def hepaFaculty(request):
    inter = HepatologyFaculty.objects.all().order_by("lname")    
    data = []
    for each in inter:
        record = {
            "fname": each.fname,
            "lname": each.lname,
            "city": each.city,            
        }
        data.append(record)

    return JsonResponse(data, safe=False)


@csrf_exempt
def downloadapi(request):
  downloads = Downloads.objects.all().order_by("-pk")
  data = []

  for each in downloads:
    record = {
      "name": each.name,
      "url": "https://www.ailbsindiaconference.com" + each.dfile.url
    }
    data.append(record)

    return JsonResponse(data, safe=False)

@csrf_exempt
def newslist(request):
    newslist = News.objects.all().order_by("-pk")
    data = []
    for each in newslist:
        record = {
            "id": each.pk,
            "title": each.title,
            "description": each.description,
            "image": "https://www.ailbsindiaconference.com" + each.image.url
        }
        data.append(record)

    return JsonResponse(data, safe=False)

@csrf_exempt
def newsitem(request, news_id):
    news = News.objects.get(pk=news_id)
    data = {
        "title": news.title,
        "image": "https://www.ailbsindiaconference.com" + news.image.url,
        "content": news.content
    }

    return JsonResponse(data, safe=False)


@csrf_exempt
def agendaapi(request, day):
    agenda = Agenda15.objects.filter(day=day).order_by("day")
    data = []
    for each in agenda:
        record = {
            "date": each.date,
            "title": each.title,
            "day": each.day,
            "venue": each.venue,
            "speaker": each.speaker,
            "description": each.description
        }
        data.append(record)

    return JsonResponse(data, safe=False)

@csrf_exempt
def attendeesapi(request):
    a1 = Registration.objects.all().order_by("last_name")
    a2 = AnesthesiaRegistration.objects.all().order_by("last_name")
    registrations = []
    for each in a1:
        record = {
            "fname": each.first_name,
            "lname": each.last_name,
            "hospital": each.hospital,
            "speciality": each.speciality,
            "mobile": each.mobile,
            "country": each.country
        }
        registrations.append(record)
    for each in a2:
        record = {
            "fname": each.first_name,
            "lname": each.last_name,
            "hospital": each.hospital,
            "speciality": each.speciality,
            "mobile": each.mobile,
            "country": each.country
        }
        registrations.append(record)

    return JsonResponse(registrations, safe=False)


@csrf_exempt
def sponsorsapi(request):
    sponsors = Sponsors.objects.all().order_by("priority")
    data = []
    for each in sponsors:
        record = {
            "name": each.name,
            "logourl": "https://www.ailbsindiaconference.com" + each.logo.url
        }
        data.append(record)

    return JsonResponse(data, safe=False)


@csrf_exempt
def getSynopsis(request):
    page = FlatPage.objects.get(title="Synopsis")

    record = [{
        "title": page.title,
        "content": page.content
    }]

    return JsonResponse(record, safe=False)
