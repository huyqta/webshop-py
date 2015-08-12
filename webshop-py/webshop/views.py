# Create your views here.
from django.http.response import HttpResponse
from .models import Category, Product
from django.shortcuts import render, redirect
from django.template import RequestContext, loader

def index(request):
    template = loader.get_template('index.html')
    list_category = Category.objects.order_by('cat_name')
    list_product = Product.objects.order_by('product_name')

    context = RequestContext(request, {
        'list_category': list_category,
        'list_product': list_product,
    })
    return HttpResponse(template.render(context))