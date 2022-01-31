from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.models import User
from .serializers import UserSerializer

# Create your views here.


class UsersList(APIView):
	def get(self, request, format=None):
		users = User.objects.all()
		serializer = UserSerializer(users, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)

	def post(self, req):
		print(f"data:{req.data}")
		serializer = UserSerializer(data=req.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsersDetail(APIView):
	def get_object(self, username):
		try:
			return User.objects.get(username=username)
		except User.DoesNotExist:
			raise Http404
	def get(self, request, username):
		user = self.get_object(username)
		serializer = UserSerializer(user)
		return Response(serializer.data, status=status.HTTP_200_OK)
	

	def put(self, request, username):
		user = self.get_object(username)
		serializer = UserSerializer(user, data=request.data)
		return Response(serializer.data, status=status.HTTP_200_OK)
		
	def delete(self, request, username):
		user = self.get_object(username)
		user.delete()
		return Response(status=status.HTTP_202_ACCEPTED)