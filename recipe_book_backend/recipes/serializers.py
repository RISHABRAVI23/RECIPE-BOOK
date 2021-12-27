
from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Recipe
		fields = ['id', 'created_by', 'title', 'desc', 'recipe_image', 'procedure', 'mats_req', 'precautions']