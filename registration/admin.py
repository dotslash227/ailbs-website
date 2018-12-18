from django.contrib import admin

from .models import Registration, AnesthesiaRegistration
from import_export.admin import ImportExportActionModelAdmin

class RegistrationAdmin(ImportExportActionModelAdmin):
    list_display = ["first_name", "middle_name", "last_name", "email", "hospital", "speciality"]

admin.site.register(Registration, RegistrationAdmin)
admin.site.register(AnesthesiaRegistration, RegistrationAdmin)