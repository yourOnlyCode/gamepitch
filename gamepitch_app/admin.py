from django.contrib import admin
from .models import Developer, Game, Investor, Appeal

admin.site.register(Developer)
admin.site.register(Game)
admin.site.register(Investor)
admin.site.register(Appeal)