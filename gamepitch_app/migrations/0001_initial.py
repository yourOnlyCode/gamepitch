# Generated by Django 3.0.7 on 2020-06-08 20:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Developer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('image_url', models.TextField()),
                ('bio', models.TextField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('facebook', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Investor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('image_url', models.TextField()),
                ('description', models.TextField(max_length=260)),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('image_url', models.TextField()),
                ('description', models.TextField(max_length=260)),
                ('genre', models.CharField(max_length=50)),
                ('concept_image', models.TextField()),
                ('mechanics', models.TextField()),
                ('videos', models.TextField()),
                ('demo', models.TextField()),
                ('developer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='games', to='gamepitch_app.Developer')),
            ],
        ),
        migrations.CreateModel(
            name='Appeal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appeals', to='gamepitch_app.Game')),
                ('investor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appeals', to='gamepitch_app.Investor')),
            ],
        ),
    ]
