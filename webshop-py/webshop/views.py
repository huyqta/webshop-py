# Create your views here.
from django.http.response import HttpResponse
from .models import Unit
from django.shortcuts import render, redirect
from django.template import RequestContext, loader

def index(request):
    list_unit = Unit.objects.order_by('unit_name')[:3]
    template = loader.get_template('index.html')
    context = RequestContext(request, {
        'list_unit': list_unit,
    })
    return HttpResponse(template.render(context))