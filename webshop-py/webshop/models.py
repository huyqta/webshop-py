#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.db import models
import uuid

# Create your models here.
class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cat_name = models.CharField(max_length=255, verbose_name="Name")
    parent_id = models.ForeignKey('self', blank=True, null=True, on_delete=models.SET_NULL, verbose_name="Parent")
    description = models.CharField(max_length=255, blank=True, verbose_name="Description")

    def parent_name(self):
        return self.parent_id.cat_name

    parent_name.short_description = 'Parent Name'

#class Application(models.Model):
#    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#    applicant = models.ForeignKey('self', blank=True, null=True, on_delete=models.SET_NULL, verbose_name="Parent")
#    text = models.CharField(max_length=255, blank=True, verbose_name="text")

#    def applicant_name(self):
#        return self.applicant.name
#    applicant_name.short_description = 'Applicant Name'

#    def applicant_email(self):
#        return self.applicant.email
#    applicant_email.short_description = 'Applicant Email'