from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
from .models import InternationalFaculty, SurgeryFaculty, AnasthesiaFaculty, HepatologyFaculty
from .models import Downloads, News


@csrf_exempt
def internationalFaculty(request):
    inter = InternationalFaculty.objects.all().order_by("lname")    
    data = []
    for each in inter:
        record = {
            "fname": each.fname,
            "lname": each.lname,
            "country": each.country,
            "image": "https://www.ailbsindiaconference.com" + each.image.url
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