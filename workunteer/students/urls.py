from rest_framework import routers
from .api import SViewSet

router = routers.DefaultRouter()
router.register('api/newstudent',SViewSet,'newstudent')
urlpatterns = router.urls