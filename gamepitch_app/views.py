from rest_framework import viewsets

from .serializers import DeveloperSerializer, GameSerializer, InvestorSerializer, AppealSerializer
from .models import Developer, Game, Investor, Appeal

class DeveloperView(viewsets.ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer


class GameView(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class InvestorView(viewsets.ModelViewSet):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer


class AppealView(viewsets.ModelViewSet):
    queryset = Appeal.objects.all()
    serializer_class = AppealSerializer
