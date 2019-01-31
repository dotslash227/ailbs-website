from django.urls import path
from . import views, apis

app_name = "web"

urlpatterns = [
    path('', views.index, name="index"),
    path('contact', views.contact, name="contact"),
    path('international-faculty', views.interfac, name="interfac"),
    path('national-faculty', views.interfac, name="nationalfac"),
    path('program-glance', views.programeglance, name="glance"),
    path('daily-program', views.dailyprogram, name="daily-program"),
    path('apis/international-faculty', apis.internationalFaculty),
    path('apis/surgery-faculty', apis.surgeryFaculty),
    path('apis/hepa-faculty', apis.hepaFaculty),
    path('apis/anes-faculty', apis.anesFaculty),
    path('apis/get-downloads', apis.downloadapi),
    path('apis/get-news-list', apis.newslist),
    path('apis/news/<int:news_id>', apis.newsitem),
    path('apis/agenda', apis.agendaapi),
    path('apis/attendees', apis.attendeesapi),
]