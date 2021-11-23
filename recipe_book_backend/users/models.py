from django.db import models

# Create your models here.

class User(models.Model):
	emailId = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=20, unique=True)
	password = models.CharField(max_length=50)
	recipes = models.IntegerField(default=0)

	def __str__(self):
		return self.username