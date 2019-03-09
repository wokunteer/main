from students.models import User
from rest_framework import viewsets,permissions
from .serializers import SSerializer

class SViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SSerializer