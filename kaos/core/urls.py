from django.urls import path
from . import views


urlpatterns = [
    path('',views.user_login, name='user_login'),
    path('home/',views.home, name='home'),
    path('padelcounter/',views.padelcounter, name='padelcounter'),
    path('rolldice/',views.rolldice,name='rolldice'),
]