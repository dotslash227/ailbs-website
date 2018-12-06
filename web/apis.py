from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
from .models import InternationalFaculty, SurgeryFaculty, AnasthesiaFaculty, HepatologyFaculty


@csrf_exempt
def internationalFaculty(request):
    inter = InternationalFaculty.objects.all().order_by("lname")    
    data = {}
    for each in inter:
        record = {
            "fname": each.fname,
            "lname": each.lname,
            "country": each.country,
            "image": "https://www.ailbsindiaconference.com" + each.image.url
        }
        data.update(record)

    return JsonResponse(data, safe=False)

@csrf_exempt
def surgeryFaculty(request):
    inter = SurgeryFaculty.objects.all().order_by("lname")    
    data = {}
    for each in inter:
        record = {
            "fname": each.fname,
            "lname": each.lname,
            "city": each.city,            
        }
        data.update(record)

    return JsonResponse(data, safe=False)

@csrf_exempt
def anesFaculty(request):
    inter = AnasthesiaFaculty.objects.all().order_by("lname")    
    data = {}
    for each in inter:
        record = {
            "fname": each.fname,
            "lname": each.lname,
            "city": each.city,            
        }
        data.update(record)

    return JsonResponse(data, safe=False)

@csrf_exempt
def hepaFaculty(request):
    inter = HepatologyFaculty.objects.all().order_by("lname")    
    data = {}
    for each in inter:
        record = {
            "fname": each.fname,
            "lname": each.lname,
            "city": each.city,            
        }
        data.update(record)

    return JsonResponse(data, safe=False)



