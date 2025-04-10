from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your views here.

class ArticleList(APIView):
    def get(self, request):
        articles = Familles.objects.all()
        serializer = FamilleSerializers(articles, many = True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = FamilleSerializers(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class TypesList(APIView):
    def get(self, request):
        types = Types.objects.all()
        serializer = TypeSerializers(types, many = True)
        return Response(serializer.data)

class ProductList(APIView):
    def get(self, request):
        produts = Product.objects.all()
        serializer = ProductSerializers(produts, many=True)
        return Response(serializer.data)


class SearchProduct(APIView):
    def get(self, request):
        query = request.GET.get('q')
        if query:
            articles = Product.objects.filter(nom__icontains = query)
            serializer = FamilleSerializers(articles, many = True)
            return Response(serializer.data)
        


class CommandeValidate(APIView):
    def post(self, request):
        user = get_object_or_404(User, email = request.data['user'])
        addresse = ShippingAddress.objects.create(user = user, pays = request.data['pays'], ville = request.data['ville'], zip_code = request.data['zip_code'])
        order = Order.objects.create(user = user, shippingaddress = addresse, quantity = len(request.data['product']), )
        for item in request.data['product']:
            product = get_object_or_404(Product, pk = int(item['id']))
            order_item = OrderProduct.objects.create(order = order, product = product, quantity = item['quantity'])
        return Response({'msg': 'donnes reçu'})
        
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializers(orders, many = True)
        return Response(serializer.data)
        



