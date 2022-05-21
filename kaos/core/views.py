from multiprocessing import context
from django.shortcuts import render
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect, HttpResponse

# Create your views here.

def user_login(request):

    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user:
            if user.is_active:
                login(request, user)
                print("Login success")
                return redirect('home')
            else:
                return HttpResponse("Account not active")
        else:
            print("Someone tried to login")
            return HttpResponse("Invalid login details supplied")
    else:
        context = {}

        return render(request, 'user_login.html', context)


@login_required
def home(request):

    context = {}

    return render(request, 'home.html', context)

@login_required
def padelcounter(request):

    context = {}

    start_value_team = 0
    # start_value_team2 = 0

    return render(request, 'padelcounter.html', context)

@login_required
def rolldice(request):

    context = {}

    return render(request, 'rolldice.html',context)