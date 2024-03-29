from django.urls import path
from . import views

app_name = "registration"

urlpatterns = [
    path('', views.RegistrationPage.as_view(), name="index"),
    path('abstract-submission', views.Abstract.as_view(), name="abstract"),
    path('anesthesia-registration', views.registrationAnesthesia, name="a-registration"),
]