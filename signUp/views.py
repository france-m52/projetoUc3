from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.core.exceptions import ValidationError


def signUp_view(request):
    if request.method == 'POST':
        nome = request.POST.get("nome")
        email = request.POST.get("email")
        senha = request.POST.get("senha")

        if User.objects.filter(username=nome).exists():
            messages.error(request, 'Nome de usuário já existe.')
            return render(request, 'signUp/signUp.html')
        else:
            try:
                User.objects.create_user(username=nome, email=email, password=senha)
                messages.success(request, 'Usuário criado com sucesso!')
                return redirect('signIn')
            except ValidationError as e:
                messages.error(request, f"Erro de validação: {e}")
                return render(request, 'signUp/signUp.html')
            except Exception as e:
                messages.error(request, f"Erro ao criar usuário: {e}")
                return render(request, 'signUp/signUp.html')  # <-- faltava esse return aqui

    # Adiciona retorno para GET
    return render(request, 'signUp/signUp.html')
