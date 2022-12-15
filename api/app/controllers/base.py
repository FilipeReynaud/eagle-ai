from fastapi import APIRouter, Request, Response
from app.schemas.generate_image_request import GenerateImageRequest

from app.services.openai import OpenAiService
router = APIRouter()


class BaseController:
    @router.get("/healthcheck")
    async def healthcheck():
        """ Healthcheck endpoint"""

        return "OK"

    @router.post("/generate_image")
    async def generate_image(request: Request, response: Response):
        try:
            body = GenerateImageRequest(**(await request.json()))
        except ValueError as error:
            response.status_code = 500

            return {
                "error": str(error)
            }

        image = OpenAiService.generate_image(
            body.description, mock=body.mock, nrOfImages=body.nrOfImages)

        return image
