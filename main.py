from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import pandas as pd

df = pd.read_excel('dati.xlsx')

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") # endpoint  punto dove chimiamo il nostro server web, lo / e la homepage
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')

@app.get("/login")
def controlla(username: str, password: str):
    print("username", username, "password", password)
    if username == "admin" and password == "xxx123":
        risposta = {"messaggio": 1}
    else:
        risposta = {"messaggio": 0}
    return(risposta)

@app.post("/pandas")
def controlla_paszsword(username: str, password: str):
    risultato = df[(df['USERNAME'] == username) & (df['PASSWORD'] == password)]
    if not risultato.empty:
        risposta = {"messaggio": 1}
    else:
        risposta = {"messaggio": 0}