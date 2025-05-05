from django.urls import path
from . import views

urlpatterns = [
    path('', views.ensineme_view, name='ensineme'),
]