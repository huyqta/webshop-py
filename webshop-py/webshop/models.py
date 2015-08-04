from django.db import models
import uuid

# Create your models here.
class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cat_name = models.CharField(max_length=255)
    parent_id = models.ForeignKey('self', blank=True, null=True, on_delete=models.SET_NULL)
    description = models.CharField(max_length=255)