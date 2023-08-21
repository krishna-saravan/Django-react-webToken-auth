from django.urls import path
from .views import RegisterView, RetrieUserview
urlpatterns = [
    path('register', RegisterView.as_view()),
path('me', RetrieUserview.as_view()),
]