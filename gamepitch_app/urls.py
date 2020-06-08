from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('developers', views.DeveloperView)
router.register('games', views.GameView)
router.register('investors', views.InvestorView)
router.register('appeals', views.AppealView)

urlpatterns = [
    path('', include(router.urls))]
