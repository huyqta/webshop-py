from django.contrib import admin
from webshop.models import Category

# Create your admin models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('cat_name', 'parent_id', 'description')

admin.site.register(Category, CategoryAdmin)