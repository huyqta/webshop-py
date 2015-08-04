from django.contrib import admin
from webshop.models import Category

# Create your admin models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('cat_name', 'parent_name', 'description')

#class ApplicationAdmin(admin.ModelAdmin):
#    list_display = ('text', 'applicant_name')

admin.site.register(Category, CategoryAdmin)
#admin.site.register(Application, ApplicationAdmin)