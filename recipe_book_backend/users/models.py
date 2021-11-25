from email.policy import default
import os
from django.db import models
from django.conf import settings

# Create your models here.

class User(models.Model):
	emailId = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=20, unique=True)
	password = models.CharField(max_length=50)
	recipes = models.IntegerField(default=0)
	profile_pic = models.ImageField(upload_to="users/images", default=os.path.join(settings.MEDIA_ROOT,'users', 'images', 'default.png'))

	def __str__(self):
		return self.username