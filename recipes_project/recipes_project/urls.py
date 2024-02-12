from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from . import settings
from recipes.views import swager_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include('recipes.urls')),
    path('doc/', swager_view.with_ui('redoc'), name='redoc'),
    path('swagger/', swager_view.with_ui('swagger'), name='swagger-swagger-ui'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)