# Generated by Django 5.1.3 on 2025-03-05 19:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_rename_categorie_types_categorie'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='familles',
            options={'verbose_name': 'Famille'},
        ),
        migrations.AlterModelOptions(
            name='shippingaddress',
            options={'verbose_name': 'Addresse Livraison'},
        ),
        migrations.AlterModelOptions(
            name='types',
            options={'verbose_name': 'Type'},
        ),
        migrations.AlterField(
            model_name='categories',
            name='famille',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='shop.familles'),
        ),
    ]
