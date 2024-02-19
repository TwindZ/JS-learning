from django.http import HttpResponse
from django.shortcuts import render

def hello(request):
	return HttpResponse('<h1>Hello World!</h1>')

def about(request):
	return HttpResponse('<h1>À propos</h1> <p>BlaBla de caca poil</p>')

def listings(request):
	return HttpResponse('<h1>Listings</h1> <p>Liste d\'article</p>')

def contact(request):
	return HttpResponse('<h1>Contact</h1> <p>555-5555</p>')
