from django.shortcuts import render, redirect

# Create your views here.

def show_feedback(request):
	return render(request, 'feedback.html')

def fix_feedback(request):
	return render(request, 'fix_feedback.html')
