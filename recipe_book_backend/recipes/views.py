from django.http import Http404
from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import RecipeSerializer
from .models import Recipe
from rest_framework import status
from rest_framework.response import Response

# Create your views here.

class RecipeList(APIView):
	def get_using_user(self, username):
		try:
			recipes = Recipe.objects.filter(created_by=username)
			return recipes
		except:
			raise Http404
	
	def get(self, req, user):
		recipes = self.get_using_user(user)
		serializer = RecipeSerializer(recipes, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)


class RecipeListAllPost(APIView):
	
	def get(self, req):
		recipes = Recipe.objects.all()
		serializer = RecipeSerializer(recipes, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
	def post(self, req):
		serializer = RecipeSerializer(data=req.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RecipeDetail(APIView):
	def get_recipe(self, id):
		try:
			recipe = Recipe.objects.get(id=id)
			return recipe
		except:
			raise Http404
	def get(self, req, id):
		return Response(RecipeSerializer(self.get_recipe(id), many=False).data)
	
	def put(self, request, id, format=None):
		recipe = self.get_recipe(id)
		serializer = RecipeSerializer(recipe, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	
	def delete(self, request, pk, format=None):
		recipe = self.get_recipe()(pk)
		recipe.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
