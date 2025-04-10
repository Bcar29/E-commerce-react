from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
User = get_user_model()

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'stock', 'thumbnail', 'description', 'type',]


class TypeSerializers(serializers.ModelSerializer):
    product = ProductSerializers(many = True, read_only=True)
    class Meta:
        model = Types
        fields = ['id', 'name', 'thumbnail', 'descriptions', 'product']

class CategorieSerializers(serializers.ModelSerializer):
    types = TypeSerializers(many = True, read_only=True)
    class Meta:
        model = Categories
        fields = ['id', 'name', 'thumbnail', 'descriptions', 'types']


class FamilleSerializers(serializers.ModelSerializer):
    categories = CategorieSerializers(many = True, read_only=True)
    class Meta:
        model = Familles
        fields = ['id', 'name', 'descriptions', 'categories']


class ShippingAdressSerializers(serializers.ModelSerializer):
    user = UserSerializers()

    class Meta:
        model = ShippingAddress
        fields = '__all__'


class CartSerializers(serializers.ModelSerializer):
    user = UserSerializers()

    class Meta:
        model = Cart
        fields = '__all__'


class OrderSerializers(serializers.ModelSerializer):
    products = ProductSerializers(many = True)
    shippingaddress = ShippingAdressSerializers()
    
    user = UserSerializers()

    class Meta:
        model = Order
        fields = '__all__'

class OrderProductSerializers(serializers.ModelSerializer):
    product = ProductSerializers()
    order = OrderSerializers()
    class Meta:
        model = OrderProduct
        fields = '__all__'

class PaiementSerializers(serializers.ModelSerializer):
    cart = CartSerializers()
    user = UserSerializers()
    class Meta:
        model = Paiement
        fields = '__all__'

