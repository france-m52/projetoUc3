from django.urls import path
from . import views

urlpatterns = [
    path('', views.gestao_view, name='gestao'),
]