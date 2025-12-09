from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView
from api.views import CookieTokenObtainPairView, CookieTokenRefreshView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api-auth/", include("rest_framework.urls")), # Django browsable API
    path("api/token/", CookieTokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", CookieTokenRefreshView.as_view(), name="refresh"),
    path("api/", include("api.urls")) # Main API router
]