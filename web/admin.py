from django.contrib import admin
from .models import HomeSlider, NationalFaculty, InternationalFaculty
from django.db import models
from django.contrib.flatpages.admin import FlatPageAdmin
from django.contrib.flatpages.models import FlatPage
from django.utils.translation import gettext_lazy as _
from ckeditor_uploader.widgets import CKEditorUploadingWidget

# Define a new FlatPageAdmin
class FlatPageAdmin(FlatPageAdmin):
    formfield_overrides = {
        models.TextField: {'widget': CKEditorUploadingWidget}
    }

# Re-register FlatPageAdmin
admin.site.unregister(FlatPage)
admin.site.register(FlatPage, FlatPageAdmin)

admin.site.register(HomeSlider)
admin.site.register(NationalFaculty)
admin.site.register(InternationalFaculty)