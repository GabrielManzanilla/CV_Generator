from django.urls import path
from . import views
urlpatterns = [
		path('', views.show_login, name='login'),
		path('register/', views.show_register, name='register'),
]