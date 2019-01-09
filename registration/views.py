from django.shortcuts import render, redirect
from .models import Registration
from django.views import View
from .forms import RegistrationForm, AnesRegistrationForm, AbstractForm
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags


def sendemail(attendee, mode):        
    html_content_original = render_to_string("registration/email.html", {"customer":attendee})  
    content = strip_tags(html_content_original)
    subject = "Confirmation of registration for the AILBS International Conference 2019"
    from_email = "AILBS India Conference <no-reply@ailbsindiaconference.com>"

    msg = send_mail(subject, content, from_email, ["dhruvarora@delhinerds.com"], html_message=html_content_original)

    try:
        msg.send()
    except Exception as e:
        print (e)
    else:
        print ("emailed")
    


class RegistrationPage(View):
    def get(self, request):
        form = RegistrationForm()
        anesForm = AnesRegistrationForm()

        return render(request, "registration/register.html", {
            "form": form, "anesform": anesForm,
        })

    def post(self, request):
        form = RegistrationForm(request.POST)        
        try:
            registration = form.save()
        except:
            pass
        else:
            sendemail(registration, 1)

        return render(request, "registration/success.html", {})


def registrationAnesthesia(request):
    form = AnesRegistrationForm(request.POST)    
    try:
        registration = form.save()
    except:
        pass
    else:
        sendemail(registration, 2)

    return render(request, "registration/success-a.html", {

    })


class Abstract(View):
    def get(self, request):
        form = AbstractForm()
        return render(request, "registration/abstract.html", {
            "form": form, "flag":True
        })
    
    def post(self, request):
        form = AbstractForm(request.POST)
        form. save()
        
        return render(request, "registration/abstract.html", {
            "flag":False,
        })