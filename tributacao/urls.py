from django.urls import path
from . import views

urlpatterns = [
    path('', views.tributacao_view, name='tributacao'),
]