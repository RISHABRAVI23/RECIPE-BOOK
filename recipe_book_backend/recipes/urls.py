from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import RecipeDetail, RecipeList, RecipeListAllPost

urlpatterns = [
	path("get/<str:user>", RecipeList.as_view()),
	path("get-all-post/", RecipeListAllPost.as_view()),
	path("<int:id>/", RecipeDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
