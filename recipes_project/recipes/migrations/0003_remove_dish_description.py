# Generated by Django 5.0.2 on 2024-02-12 14:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_alter_category_options_alter_category_name_dish_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dish',
            name='description',
        ),
    ]