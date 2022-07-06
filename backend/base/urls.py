from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('users/register/', views.registerUser, name="register"),
    
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('/contact/', views.contact, name='contact'),
    path('',views.getRoutes, name="routes"),
    path('users/profile/',views.getUserProfile, name="user-profile"),
    path('users/profile/update/',views.updateUserProfile, name="user-profile-update"),
    path('users/',views.getUsers, name="user"),
    path('users/<str:pk>/', views.getUserById, name='user-byId'),
    path('users/update/<str:pk>/', views.updateUser, name='user-update'),
    path('users/delete/<str:pk>/', views.deleteUser, name='user-delete'),

    path('brands/', views.getBrands, name='brands'),
    path('products/',views.getProducts, name="products"),
    path('product1/',views.getProduct1, name="product1"),
    path('lee/',views.getLee, name="lee"),
    path('leelow/', views.getLeeLowest, name='lowest'),
    path('leehigh/', views.getLeeHighest, name='highest'),
    path('leeview/', views.getLeeView, name='lee-view'),
    path('ray/',views.getRay, name="ray"),
    path('raylow/', views.getRayLow, name='r-lowest'),
    path('rayhigh/', views.getRayHigh, name='r-highest'),
    path('levis/',views.getLevis, name="levis"),
    path('levislow/',views.getLevisLow, name="levis-l"),
    path('levishigh/',views.getLevisHigh, name="levis-h"),
    path('peter/',views.getPeter, name="Peter"),
    path('plow/', views.getPeterLow, name='r-lowest'),
    path('phigh/', views.getPeterHigh, name='r-highest'),
    path('hm/',views.getHm, name="H&M"),
    path('top/',views.getTop, name="top"),
    path('bottom/',views.getBottom, name="bottom"),
    path('products/<str:pk>/',views.getProduct, name="product"),
    path('product1/<str:pk>/',views.getProduct1, name="product1"),
    path('products/delete/<str:pk>/',views.deleteProduct, name="delete-product"),
    path('products/create/',views.createProduct, name="create-product"),
    path('products/<str:pk>/reviews/',views.createProductReview, name="product-review"),

    
    path('order/add/', views.addOrderItems, name='orders-add'),
    path('order/', views.getOrders, name='get-orders'),
    path('order/summary/', views.getTotalPrice, name='order-price'),
    path('order/myorder/', views.getMyOrders, name='my-orders'),

    path('order/<str:pk>/', views.getOrderById, name='user-order'),
    path('order/<str:pk>/deliver/', views.updateOrderToDelivered, name='order-deliver'),
    path('order/<str:pk>/pay/', views.updateOrderToPaid, name='paid'),
    path('discount/', views.discount, name='dis')
 
]
