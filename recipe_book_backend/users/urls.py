from django.urls import path

from .views import UsersList, UsersDetail

urlpatterns = [
    path('', UsersList.as_view()),
    path('<str:username>/', UsersDetail.as_view()),
]