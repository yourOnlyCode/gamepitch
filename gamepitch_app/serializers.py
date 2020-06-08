from rest_framework import serializers

from .models import Developer, Game, Investor, Appeal

class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = ('id', 'name', 'image_url', 'bio', 'email', 'facebook')


class GameSerializer(serializers.ModelSerializer):
    developer = DeveloperSerializer(many=True, read_only=True)
    class Meta:
        model = Game
        fields = (
            'id',
            'image_url',
            'description',
            'genre',
            'concept_image',
            'mechanics',
            'videos',
            'demo',
            'games')


