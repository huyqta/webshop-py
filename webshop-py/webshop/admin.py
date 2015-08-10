from django.contrib import admin
from webshop.models import Category, Product, Unit, Image, SiteInformation, WebContent, Discount
from django.contrib.admin.options import TabularInline
from webshop import models

# Create your admin models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('cat_name', 'get_parent', 'description')

class ImageInline(admin.TabularInline):
    model = models.Image

class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'description', 'price', 'get_category', 'get_unit', 'get_discount')
    
    inlines = [ImageInline,]

    def get_category(self, obj):
        return "%s"%(obj.fk_category.cat_name)

    def get_unit(self, obj):
        return "%s"%(obj.fk_unit.unit_name)

    def get_discount(self, obj):
        return "%s"%(obj.fk_discount.discount_name)

class UnitAdmin(admin.ModelAdmin):
    list_display = ('unit_name', 'description')

class SiteInformationAdmin(admin.ModelAdmin):
    list_display = ('site_name', 'site_logo_url')

class WebContentAdmin(admin.ModelAdmin):
    list_display = ('content_name', 'content_text')

class DiscountAdmin(admin.ModelAdmin):
    list_display = ('discount_name', 'description', 'start_date', 'end_date', 'discount_type', 'discount_value', 'active')

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Unit, UnitAdmin)
admin.site.register(SiteInformation, SiteInformationAdmin)
admin.site.register(WebContent, WebContentAdmin)
admin.site.register(Discount, DiscountAdmin)