from django.contrib import admin
from webshop.models import Category, Product, Unit, Image
from django.contrib.admin.options import TabularInline
from webshop import models

# Create your admin models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('cat_name', 'get_parent', 'description')

class ImageInline(admin.TabularInline):
    model = models.Image

class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'description', 'price', 'get_category', 'get_unit')
    
    inlines = [ImageInline,]

    def get_category(self, obj):
        return "%s"%(obj.fk_category.cat_name)

    def get_unit(self, obj):
        return "%s"%(obj.fk_unit.unit_name)

class UnitAdmin(admin.ModelAdmin):
    list_display = ('unit_name', 'description')

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Unit, UnitAdmin)