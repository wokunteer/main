from rest_framework import serializers
from students.models import User

class SSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'