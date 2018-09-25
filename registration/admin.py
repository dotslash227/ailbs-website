from django.contrib import admin

from .models import Registration
from import_export.admin import ImportExportActionModelAdmin

class RegistrationAdmin(ImportExportActionModelAdmin):
    pass

admin.site.register(Registration, RegistrationAdmin)