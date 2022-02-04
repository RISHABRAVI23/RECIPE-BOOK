# Generated by Django 3.2.7 on 2022-02-02 13:17

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0014_alter_recipe_date_created'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='deleted',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='date_created',
            field=models.DateField(default=datetime.datetime(2022, 2, 2, 13, 17, 24, 307774, tzinfo=utc)),
        ),
    ]
