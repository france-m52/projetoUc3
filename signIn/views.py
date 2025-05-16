from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm

def signIn_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            usuario = form.cleaned_data.get('username')
            senha = form.cleaned_data.get('password')
            user = authenticate(username=usuario, password=senha)
            if user is not None:
                login(request, user)
                return redirect('home')  # Altere para o nome da sua URL de destino
        # Se o formulário for inválido ou a autenticação falhar
        return render(request, 'signIn/signIn.html', {'form': form})
    else:
        form = AuthenticationForm()
    return render(request, 'signIn/signIn.html', {'form': form})