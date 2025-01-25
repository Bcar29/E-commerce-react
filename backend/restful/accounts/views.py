from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model, login, logout, authenticate
User = get_user_model()
# Create your views here.
@api_view(['POST'])
def register_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = User.objects.create_user(email=email, password=password)
    login(request, user)
    

@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(request, email=email, password=password)
    if user : 
        login(request, user)


@api_view(['POST'])
def logout_user(request):
    logout(request)
