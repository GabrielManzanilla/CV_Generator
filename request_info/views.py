from django.shortcuts import render

# Create your views here.

def request_info(request):
		if request.method == "POST":
				# Process the form data
				personal_info = request.POST.get('personal_info')
				fixed_info = request.POST.get('personal_fixes')
				vacancy_info = request.POST.get('vacancy_info')
				# Add more fields as needed

				# Here you can save the data to the database or perform other actions

				#return render(request, 'request_info/success.html', {'name': name})

		return render(request, 'form_page.html')