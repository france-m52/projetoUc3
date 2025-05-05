from django.shortcuts import render

def sobre_view(request):
    return render(request, 'sobre/sobre.html')

# Create your views here.
