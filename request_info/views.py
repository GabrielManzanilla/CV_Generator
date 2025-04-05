from django.shortcuts import render
from django.shortcuts import redirect

# Create your views here.

def request_info(request):
		if request.method == "POST":
				# Process the form data
				personal_info = request.POST.get('personal_info')
				fixed_info = request.POST.get('personal_fixes')
				vacancy_info = request.POST.get('vacancy_info')
				

				return redirect('/feedback') 

		return render(request, 'form_page.html')