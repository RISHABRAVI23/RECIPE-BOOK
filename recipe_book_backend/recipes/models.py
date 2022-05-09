import os
from django.conf import settings
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone
import datetime

# Create your models here.


class Recipe(models.Model):
	created_by = models.CharField(max_length=20, default="", blank=True)
	title = models.CharField(max_length=50, default="", blank=True)
	desc = models.CharField(max_length=200, default="", blank=True)
	recipe_image = models.ImageField(max_length=1000, upload_to="recipes/images", default=os.path.join("recipes", "images", "default.png"))
	ingredients_req = ArrayField(models.CharField(max_length=50, blank=True), blank=True, default=list)
	procedure = ArrayField(models.CharField(max_length=200, default="", blank=True), blank=True, default=list)
	precautions = models.CharField(max_length=200, default="", blank=True)
	date_created = models.DateField(default=datetime.date.today(), blank=False)
	deleted = models.BooleanField(default=False)

	def __str__(self):
		return self.title

