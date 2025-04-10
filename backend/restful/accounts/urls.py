from django.urls import path
from .views import *


urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', LoginUser.as_view(), name='login'),
    path('logout/', LogoutUser.as_view(), name='logout'),
    path('user/', GetUser.as_view(), name='user'),
]
 