from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model, login, authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import UserSerializers

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
        if user is not None:
            return Response(
                {"msg": "Inscription réussie", "user": user.email},

                status=status.HTTP_201_CREATED
            )
    except Exception as e:
        return Response(
            {'error': 'Erreur lors de la création du compte', 'details': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

        


class GetUser(APIView):
    # permission_classes = [IsAuthenticated]  # Seuls les utilisateurs connectés peuvent voir leurs infos

    def get(self, request):
        print("get user", request.user)
        user = request.user  # Récupère l'utilisateur connecté grâce à JWT
        serializer = UserSerializers(user)  # Sérialise l'utilisateur
        return Response(serializer.data)  # Retourne les données en JSON


class LoginUser(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user = authenticate(email=request.data["email"], password=request.data["password"])
        if user is None:
            return Response({"error": "Identifiants invalides"}, status=status.HTTP_401_UNAUTHORIZED)

        
        refresh = RefreshToken.for_user(user)  # Génère un token JWT
        login(request, user)
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "status":status.HTTP_200_OK
        })


class LogoutUser(APIView):
    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()  # Invalide le token
            return Response({"message": "Déconnexion réussie"}, status=status.HTTP_200_OK)
        except Exception:
            return Response({"error": "Token invalide"}, status=status.HTTP_400_BAD_REQUEST)
