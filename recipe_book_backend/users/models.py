import os
from django.db import models
from django.conf import settings
from recipes.models import Recipe

# Create your models here.

class User(models.Model):
	emailId = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=20, unique=True)
	password = models.CharField(max_length=50)
	profile_pic = models.ImageField(max_length=1000, upload_to="users/images", default=os.path.join(settings.MEDIA_ROOT, 'users', 'images', 'default.png'))

	def __str__(self):
		return self.username