from rest_framework import serializers

from .models import Developer, Game, Investor, Appeal

class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = ('id', 'name', 'image_url', 'bio', 'email', 'facebook')