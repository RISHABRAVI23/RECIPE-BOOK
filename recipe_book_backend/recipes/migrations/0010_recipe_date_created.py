# Generated by Django 3.2.7 on 2022-01-11 08:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0009_rename_mats_req_recipe_ingredients_req'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='date_created',
            field=models.DateField(default=datetime.date(2022, 1, 11)),
        ),
    ]
