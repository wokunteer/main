from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    is_student = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=True)

    def __str__(self):
        return self.username

class Studen(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    city = models.CharField(max_length=100)
    town = models.CharField(max_length=100)




