from django.urls import path
from . import views
urlpatterns = [
		path('', views.request_info, name="request_info"),
]