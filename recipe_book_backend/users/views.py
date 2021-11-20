from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.models import User
from .serializers import UserSerializer

# Create your views here.

class UsersList(APIView):
	def get(self, request):
		users = User.objects.all()
		serializer = UserSerializer(users, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	

	def post(self, request):
		data = request.data
		serializer = UserSerializer(data=data)


class UsersDetail(APIView):
	def get(self, request):
		users = User.objects.all()
		serializer = UserSerializer(users)
		return Response(serializer.data, status=status.HTTP_200_OK)
	

	def post(self, request):
		data = request.data
		serializer = UserSerializer(data=data)