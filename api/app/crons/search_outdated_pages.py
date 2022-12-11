from fastapi_utils.tasks import repeat_every

from app.app import app


@app.on_event("startup")
@repeat_every(seconds=500)
def search_outdated_pages():
    """"""
    pass