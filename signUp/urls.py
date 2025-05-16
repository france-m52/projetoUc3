from django.urls import path
from . import views

urlpatterns = [
    path('', views.signUp_view, name='signUp'),
]