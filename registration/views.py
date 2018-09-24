from django.shortcuts import render, redirect
from .models import Registration
from django.views import View
from .forms import RegistrationForm
from instamojo_wrapper import Instamojo

class RegistrationPage(View):
    def get(self, request):
        form = RegistrationForm()

        return render(request, "registration/register.html", {
            "form": form,
        })

    def post(self, request):
        form = RegistrationForm(request.POST)
        plan = request.POST.get("plan")

        if plan == "1":
            amount = 9999
        elif plan == "2":
            amount = 8000
        elif plan == "3":
            amount = 6000
        elif plan == "4":
            amount = 4000
        
        accompany = request.POST.get("accompany")
        if accompany == "True":
            amount = amount + 4000
        
        amount = str(amount)

        api = Instamojo(api_key="92ea3466d534bb7f2c711c93e5052c22", auth_token="2fd7faa07866e873a04b4eed72acd2c9")
        response = api.payment_request_create(
            amount = amount,
            purpose = "AILBS Registration",
            send_email = False,
            send_sms = False,
            email = request.POST.get("email"),
            buyer_name = request.POST.get("first_name") + " " + request.POST.get("last_name"),
            phone = request.POST.get("mobile"),
            redirect_url = "http://www.ailbsindiaconference.com/registration/handle_instamojo"
        ) 
        registration = form.save(commit=False)
        registration.txnid = response["payment_request"]["id"]
        registration.amount = amount

        instamojo_url = response["payment_request"]["longurl"]

        return redirect(instamojo_url)



def handle_instamojo(request):    
    response = api.payment_request_payment_status(request.POST.get("id"))
    user = Registration.objects.get(txnid=request.POST.get("id"))
    status = response["payment_request"]["status"]
    user.status = status
    user.save()

    if status == "success":
        url = "registration:success"
    else:
        url = "registration:failure"

    return redirect(url)


def successPage(request):
    pass


def failurePage(request):
    pass