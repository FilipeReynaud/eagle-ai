from fastapi import FastAPI


"""
    Instance shared accross entire project.
    This is required to register cron jobs in different files.
"""
app = FastAPI()
