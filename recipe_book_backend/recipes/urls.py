from django.urls import path
from .views import RecipeDetail, RecipeList, RecipeListAllPost

urlpatterns = [
	path("get/<str:user>", RecipeList.as_view()),
	path("get-all-post/", RecipeListAllPost.as_view()),
	path("<int:id>/", RecipeDetail.as_view())
]
