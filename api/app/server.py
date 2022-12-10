from app.app import app

from app.controllers import base


app.include_router(base.router)
