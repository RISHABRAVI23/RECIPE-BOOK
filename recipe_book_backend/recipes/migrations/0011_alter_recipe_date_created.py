# Generated by Django 3.2.7 on 2022-01-11 08:10

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0010_recipe_date_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='date_created',
            field=models.DateField(default=datetime.datetime(2022, 1, 11, 8, 10, 57, 940639, tzinfo=utc)),
        ),
    ]
