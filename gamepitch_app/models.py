from django.db import models

class Developer(models.Model):
    name = models.CharField(max_length = 120)
    image_url = models.TextField()
    bio = models.TextField(max_length = 260)

    def __str__(self):
        return self.name

class Game(models.Model):
    name = models.CharField(max_length = 120)
    image_url = models.TextField()
    description = models.TextField(max_length = 260)
    genre = models.CharField(max_length = 50)
    concept_images = models.TextField()
    videos = models.TextField()
    developer = models.ForeignKey(
        Developer, on_delete=models.CASCADE, related_name='games')

    def __str__(self):
        return self.name

class Investor(models.Model):
    name = models.CharField(max_length = 120)
    image_url = models.TextField()
    description = models.TextField(max_length=260)

    def __str__(self):
        return self.name

class Appeal(models.Model):
    