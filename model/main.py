from fastapi import FastAPI
import joblib
import numpy as np

app = FastAPI()
Model = joblib.load('./random_forest_model.pkl')


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/predictSales")
def predict_sales(body: dict):
    try:
        print("1")
        numeric_data = []
        print(body)
        for item in body["products"]:
            numeric_item = [
                int(item["store"]),
                int(item["dept"]),
                int(item["isholiday"]),
                int(item["size"]),
                int(item["week"]),
                int(item["type"]),
                int(item["year"])
            ]
            numeric_data.append(numeric_item)
        print("3")
        input_array = np.array(numeric_data)
        pred = Model.predict(input_array)
        print("2")
        pred_list = pred.tolist()
        return {"success": True, "predicted_sales": pred_list[0]}
    except Exception as e:
        return {"success": False, "msg": e.__str__()}
