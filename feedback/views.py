from django.shortcuts import render

# Create your views here.

def feedback(request):
	# SOlicitud nuevamente para verificacion y mejoracion

	#llamado a la descarga

	
	# impresion de los resultados del feedback
	return render(request, 'feedback.html')
