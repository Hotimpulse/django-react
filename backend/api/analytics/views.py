from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# import pandas as pd

class UploadCSVView(APIView):
    def post(self, request):
        if "file" not in request.FILES:
            return Response({"error": "CSV file required"}, status=400)
        
        file = request.FILES("file")


        try:
            df = pd.read_csv(file)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        
        request.session["analytics_df"] = df.to_json(orient="slpit")

        return Response({
            "columns": df.columns.tolist(),
            "rowCount": len(df)
        })
    
class QueryDataView(APIView):
    def post(self, request):
        if "analytics_df" not in request.session:
            return Response({"error": "No dataset uploaded"}, status=400)
        
        df = pd.read_json(request.session["analytics_df"], orient="split")

        x = request.data.get('x')
        y = request.data.get('y')
        agg = request.data.get("aggregation", "sum")

        if not x or not y:
            return Response({"error": "Invalid columns provided"}, status=400)