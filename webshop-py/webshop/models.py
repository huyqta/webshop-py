#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.db import models
import uuid

# Create your models here.
class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cat_name = models.CharField(max_length=255, verbose_name="Name")
    parent_id = models.ForeignKey('self', verbose_name="Parent")
    description = models.CharField(max_length=4000, blank=True, verbose_name="Description")

    def get_parent(obj):
        return "%s"%(obj.parent_id.cat_name)

    def __unicode__(self):
        return u'%s' % (self.cat_name)

class Unit(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    unit_name = models.CharField(max_length=255, verbose_name="Name")
    description = models.CharField(max_length=4000, blank=True, verbose_name="Description")

    def __unicode__(self):
        return u'%s' % (self.unit_name)

class Discount(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    discount_name = models.CharField(max_length=255, verbose_name="Discount name")
    description = models.CharField(max_length=4000, blank=True, verbose_name="Description")
    start_date = models.DateTimeField(verbose_name="Start date")
    end_date = models.DateTimeField(verbose_name="End date")
    discount_type = models.IntegerField(verbose_name="Discount type")
    discount_value = models.DecimalField(max_digits=9, decimal_places=2, verbose_name="Value")
    active = models.BooleanField(verbose_name="Active")

    def __unicode__(self):
        return u'%s' % (self.discount_name)

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_name = models.CharField(max_length=255, verbose_name="Name")
    description = models.CharField(max_length=4000, blank=True, verbose_name="Description")
    price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name="Price")
    fk_category = models.ForeignKey(Category, verbose_name="Category")
    fk_unit = models.ForeignKey(Unit, verbose_name="Unit")
    fk_discount = models.ForeignKey(Discount, verbose_name="Discount")

class Image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    image_url = models.CharField(max_length=255, verbose_name="Image url")
    image_thumb_url = models.CharField(max_length=255, blank=True, verbose_name="Image thumb url")
    is_default = models.BooleanField(verbose_name="Default image")
    description = models.CharField(max_length=4000, blank=True, verbose_name="Description")
    fk_product = models.ForeignKey(Product, verbose_name="Product")

class SiteInformation(models.Model):
    site_name = models.CharField(max_length=255, verbose_name="Site name")
    site_logo_url = models.CharField(max_length=255, verbose_name="Site logo")

class WebContent(models.Model):
    content_name = models.CharField(max_length=255, verbose_name="Content name")
    content_text = models.CharField(max_length=4000, verbose_name="Content text")