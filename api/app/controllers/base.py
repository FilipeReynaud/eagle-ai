from fastapi import APIRouter, Request, Response

from app.services.openai import OpenAiService
# prefix="/"
router = APIRouter()

class BaseController:
    @router.get("/healthcheck")
    async def healthcheck():
        """ Healthcheck endpoint"""

        return "OK"

    @router.post("/generate_image")
    async def generate_image(request: Request, response: Response):
        body = await request.json()

        description = body["description"]
        mock = body["mock"]

        # description can't have more than 1k characters
        if not description or len(description) > 1000:
            response.status_code = 500

            return {
                "errorMessage": "description can't have more than 1k characters"
            }

        image = OpenAiService.generate_image(description, mock=mock)

        return image