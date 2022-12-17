from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import redis

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:6379",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

r = redis.Redis(host='redis', port=6379, db=0)

@app.get("/")
def read_root():
    data = r.get('data')
    if data:
        return data
    else:
        data = {"Hello": "World"}
        r.set('Hello', data["Hello"])
        return data
