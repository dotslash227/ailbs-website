from django.urls import path
from . import views

app_name = "web"

urlpatterns = [
    path('', views.index, name="index"),
    path('contact', views.contact, name="contact"),
    path('international-faculty', views.interfac, name="interfac"),
    path('national-faculty', views.interfac, name="nationalfac"),
]