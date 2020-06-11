from django.db import models


class Developer(models.Model):
    name = models.CharField(max_length=120)
    image_url = models.TextField()
    bio = models.TextField(max_length=255)
    email = models.CharField(max_length=255)
    facebook = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Game(models.Model):
    name = models.CharField(max_length=120, blank=True)
    image_url = models.TextField(blank=True)
    description = models.TextField(max_length=300, blank=True)
    genre = models.CharField(max_length=50, blank=True)
    concept_image = models.TextField(blank=True)
    mechanics = models.TextField(blank=True)
    videos = models.TextField(blank=True)
    demo = models.TextField(blank=True)
    hasAppeal = models.BooleanField(default=False)
    developer = models.ForeignKey(
        Developer, on_delete=models.CASCADE, related_name='games')

    def __str__(self):
        return self.name


class Investor(models.Model):
    name = models.CharField(max_length=120)
    image_url = models.TextField()
    description = models.TextField(max_length=260)

    def __str__(self):
        return self.name


class Appeal(models.Model):
    game = models.ForeignKey(
        Game, on_delete=models.CASCADE, related_name='appeals')
    investor = models.ForeignKey(
        Investor, on_delete=models.CASCADE, related_name='appeals')
