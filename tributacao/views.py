from django.shortcuts import render

def tributacao_view(request):
    return render(request, 'tributacao/tributacao.html')

# Create your views here.
