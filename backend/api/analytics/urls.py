from django.urls import path
from api.analytics.views import UploadCSVView, QueryDataView
from api.analytics import views

urlpatterns = [
    path("upload/", views.UploadCSVView.as_view(), name="analytics-upload"),
    path("query/", views.QueryDataView.as_view(), name="analytics-query"),
]