from django.contrib import admin
from .models import HomeSlider, InternationalFaculty, SurgeryFaculty, AnasthesiaFaculty, HepatologyFaculty
from .models import Downloads, News, Agenda15, Agenda16, Agenda17, Agenda172, Sponsors
from django.db import models
from django.contrib.flatpages.admin import FlatPageAdmin
from django.contrib.flatpages.models import FlatPage
from django.utils.translation import gettext_lazy as _
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from import_export.admin import ImportExportActionModelAdmin

# Define a new FlatPageAdmin
class FlatPageAdmin(FlatPageAdmin):
    formfield_overrides = {
        models.TextField: {'widget': CKEditorUploadingWidget}
    }

class CommonAdmin(ImportExportActionModelAdmin):
    pass

class CommonAdmin2(ImportExportActionModelAdmin):
    list_display = ["fname", "lname"]

class CommonAdmin3(ImportExportActionModelAdmin):
    list_display = ["time_range", "title", "description", "speaker"]
    list_display_links = ["time_range", "title"]

# Re-register FlatPageAdmin
admin.site.unregister(FlatPage)
admin.site.register(FlatPage, FlatPageAdmin)
admin.site.register(Agenda15, CommonAdmin3)
admin.site.register(Agenda16, CommonAdmin3)
admin.site.register(Agenda17, CommonAdmin3)
admin.site.register(Agenda172, CommonAdmin3)
admin.site.register(HomeSlider)
admin.site.register(SurgeryFaculty, CommonAdmin2)
admin.site.register(AnasthesiaFaculty, CommonAdmin2)
admin.site.register(HepatologyFaculty, CommonAdmin2)
admin.site.register(InternationalFaculty)
admin.site.register(Downloads)
admin.site.register(News)
admin.site.register(Sponsors)