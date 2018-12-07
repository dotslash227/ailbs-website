from django.contrib import admin
from .models import HomeSlider, InternationalFaculty, SurgeryFaculty, AnasthesiaFaculty, HepatologyFaculty
from .models import Downloads, News
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

# Re-register FlatPageAdmin
admin.site.unregister(FlatPage)
admin.site.register(FlatPage, FlatPageAdmin)

admin.site.register(HomeSlider)
admin.site.register(SurgeryFaculty, CommonAdmin)
admin.site.register(AnasthesiaFaculty, CommonAdmin)
admin.site.register(HepatologyFaculty, CommonAdmin)
admin.site.register(InternationalFaculty)
admin.site.register(Downloads)
admin.site.register(News)