from django.http import HttpResponse
from django.shortcuts import render
from listings.models import Band
from listings.models import Affiche

def hello(request):
	bands = Band.objects.all()
	return render(request, 'listings/hello.html', {'bands': bands})

def about(request):
	affiche = Affiche.objects.all()
	return HttpResponse(f"""
	 	<h1>Affiche!</h1>
		<p>liste des affiches :<p>
		<ul>
			<li>{affiche[0].title}</li>
			<li>{affiche[1].title}</li>
			<li>{affiche[2].title}</li>
			<li>{affiche[3].title}</li>
		</ul>
""")

def listings(request):
	return HttpResponse('<h1>Listings</h1> <p>Liste d\'article</p>')

def contact(request):
	return HttpResponse('<h1>Contact</h1> <p>555-5555</p>')
