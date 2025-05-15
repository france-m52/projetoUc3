from django.shortcuts import render

def home_view(request):
    """View básica para a página inicial"""
    return render(request, 'home/home.html')  # Certifique-se que este template existe