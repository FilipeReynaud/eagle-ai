from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

"""
    Instance shared accross entire project.
    This is required to register cron jobs in different files.
"""
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
