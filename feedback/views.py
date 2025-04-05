from django.shortcuts import render

# Create your views here.

def show_feedback(request):
	# SOlicitud nuevamente para verificacion y mejoracion

	#llamado a la descargs
	# impresion de los resultados del feedback
	return render(request, 'feedback.html')

def fix_feedback(request):
	#llamado a la descargs
	# impresion de los resultados del feedback
	return render(request, 'fix_feedback.html')
