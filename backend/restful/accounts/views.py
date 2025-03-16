from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model, login, logout, authenticate
User = get_user_model()
# Create your views here.

@api_view(['POST'])
def register_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response(
            {'error': 'Email et mot de passe sont requis'},
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(email=email).exists():
        return Response(
            {'error': 'Un compte existe déjà avec cet email'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = User.objects.create_user(email=email, password=password)
        login(request, user)  # Assurez-vous que AUTHENTICATION_BACKENDS est bien configuré
        return Response(
            {"msg": "Inscription réussie"},
            status=status.HTTP_201_CREATED
        )
    except Exception as e:
        return Response(
            {'error': 'Erreur lors de la création du compte', 'details': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(email=email, password=password)
    if user : 
        login(request, user)
        return Response('connexion reussi !')
    else:
        return Response("Veuillez reesayer !")


@api_view(['POST'])
def logout_user(request):
    logout(request) 
    return Response("deconnecté !")
