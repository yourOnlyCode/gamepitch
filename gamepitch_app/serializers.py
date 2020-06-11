from rest_framework import serializers

from .models import Developer, Game, Investor, Appeal


class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = ('id', 'name', 'image_url', 'bio', 'email', 'facebook')


class GameSerializer(serializers.ModelSerializer):
    developer = DeveloperSerializer(many=False, read_only=True)

    class Meta:
        model = Game
        fields = (
            'id',
            'name',
            'image_url',
            'description',
            'genre',
            'concept_image',
            'mechanics',
            'videos',
            'demo',
            'hasAppeal',
            'developer')


class InvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investor
        fields = ('id', 'name', 'image_url', 'description')


class AppealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appeal
        fields = '__all__'


class FeedSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)
    developer = DeveloperSerializer(many=False, read_only=True)

    class Meta:
        model = Game
        fields = ('id', 'name', 'image_url', 'description',
                  'genre', 'games', 'hasAppeal', 'developer')
