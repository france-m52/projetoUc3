from django.urls import path
from . import views

urlpatterns = [
    path('', views.vendas_view, name='vendas'),
]