from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm  # Formulário padrão de login

def signin_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            # Autentica o usuário
            user = form.get_user()
            login(request, user)
            return redirect('home')  # Redireciona após login
    else:
        form = AuthenticationForm()
    return render(request, 'signin/signin.html', {'form': form})