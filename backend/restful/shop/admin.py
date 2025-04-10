from django.contrib import admin

from .models import *

# Register your models here.

@admin.register(Familles)
class FamillesAdmin(admin.ModelAdmin):
    list_display = ('name', 'descriptions')

@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('famille', 'name', 'descriptions')

@admin.register(Types)
class TypesAdmin(admin.ModelAdmin):
    list_display = ('categorie', 'name', 'descriptions')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('type', 'name', 'price', 'stock',  'description')

@admin.register(ShippingAddress)
class ShippingAddressAdmin(admin.ModelAdmin):
    list_display = ('user', 'pays', 'ville', 'zip_code')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'shippingaddress', 'quantity', 'ordered_date', 'montant', 'delivred')

@admin.register(OrderProduct)
class OrderProductAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity')

@admin.register(Paiement)
class PaiementAdmin(admin.ModelAdmin):
    list_display = ('user',  'mount')
