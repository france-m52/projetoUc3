from django.shortcuts import render

def vendas_view(request):
    return render(request, 'vendas/vendas.html')

# Create your views here.
