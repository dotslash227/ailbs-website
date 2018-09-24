from django.urls import path
from . import views

app_name = "registration"

urlpatterns = [
    path('', views.RegistrationPage.as_view(), name="index"),
    path('handle_instamojo', views.handle_instamojo, name="instamojo"),
    path('success', views.successPage, name="success"),
    path('failure', views.failurePage, name="failure"),
]