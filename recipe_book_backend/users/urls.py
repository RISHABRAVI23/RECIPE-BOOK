from django.urls import path

from .views import UsersList, UsersDetail

urlpatterns = [
    path('users/', UsersList.as_view()),
    path('users/<str:pk>', UsersDetail.as_view()),
]