"""
URL configuration for projetoUc3 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.urls import path
from signIn.views import signIn_view
from signUp.views import signUp_view
from home.views import home_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tributacao/', include('tributacao.urls')),
    path('vendas/', include('vendas.urls')),
    path('gestao/', include('gestao.urls')),
    path('ensineme/', include('ensineme.urls')),
    path('sobre/', include('sobre.urls')),
    path('signin/', signIn_view, name='signin'),
    path('signup/', signUp_view, name='signup'),
    path('', home_view, name='home'),
]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)