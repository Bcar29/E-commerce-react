# Generated by Django 5.1.3 on 2025-02-07 11:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='types',
            old_name='Categorie',
            new_name='categorie',
        ),
    ]
