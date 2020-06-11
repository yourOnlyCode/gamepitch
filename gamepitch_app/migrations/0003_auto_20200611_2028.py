# Generated by Django 3.0.7 on 2020-06-11 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gamepitch_app', '0002_game_hasappeal'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='concept_image',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='demo',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='description',
            field=models.TextField(blank=True, max_length=300),
        ),
        migrations.AlterField(
            model_name='game',
            name='genre',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='game',
            name='image_url',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='mechanics',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='name',
            field=models.CharField(blank=True, max_length=120),
        ),
        migrations.AlterField(
            model_name='game',
            name='videos',
            field=models.TextField(blank=True),
        ),
    ]
