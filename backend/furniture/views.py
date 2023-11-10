from django.shortcuts import render
from backend.usecases import *
from rest_framework.response import Response
from rest_framework.status import *
# Create your views here.


class TestView(NoAuthApiView):
    
    def get(self, request):
        context = {
        'message': 'hello world'
        }
        return Response(context, status=HTTP_200_OK)
