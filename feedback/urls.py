from django.urls import path
from . import views

urlpatterns=[
	path('', views.show_feedback, name="show_feedback"),
	path('update/', views.fix_feedback, name="fix_feedback")
]