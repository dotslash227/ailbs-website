from django.urls import path
from . import views, apis

app_name = "web"

urlpatterns = [
    path('', views.index, name="index"),
    path('contact', views.contact, name="contact"),
    path('international-faculty', views.interfac, name="interfac"),
    path('national-faculty', views.interfac, name="nationalfac"),
    path('apis/international-faculty', apis.internationalFaculty),
    path('apis/surgery-faculty', apis.surgeryFaculty),
    path('apis/hepa-faculty', apis.hepaFaculty),
    path('apis/anes-faculty', apis.anesFaculty),
]