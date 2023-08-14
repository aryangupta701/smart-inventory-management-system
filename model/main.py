from fastapi import FastAPI
import joblib
import numpy as np 

app = FastAPI()
Model = joblib.load('./random_forest_model.pkl')

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/predictSales")
def predict_sales(body):
    try:
        input_val = np.array([
        body["store"],
        body["dept"],
        body["isholiday"],
        body["size"],
        body["week"],
        body["type"],
        body["year"]
        ])
        pred = Model.predict(input_val)
        return {"success": True, "predicted_sales":pred[0]}; 
    except Exception as e:
        return {"success": False, "msg": e.__str__()}
    
