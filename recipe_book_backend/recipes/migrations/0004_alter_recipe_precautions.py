# Generated by Django 3.2.7 on 2021-12-13 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_auto_20211213_1119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='precautions',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
    ]
