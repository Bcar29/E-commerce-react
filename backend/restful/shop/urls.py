from django.urls import path
from .views import *


urlpatterns = [
    path('familles/', ArticleList.as_view(), name='list'),
    path('types/', TypesList.as_view()),
    path('produits/', ProductList.as_view()),
    path('commandes/', CommandeValidate.as_view()),
    
]
