from app.services.requests import RequestsService
from app.settings import OPENAI_TOKEN


class OpenAiService:
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {OPENAI_TOKEN}"
    }

    url = "https://api.openai.com/v1/images/generations"

    mock_response = [
        {
            "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-oj6Bikw36bTnFlPE89TkpHAC/user-RZZosSGFohbeqglJ7Wv8MByp/img-HwxDsb8k44mvTBnzPirftUax.png?st=2022-12-10T21%3A19%3A06Z&se=2022-12-10T23%3A19%3A06Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-10T20%3A26%3A20Z&ske=2022-12-11T20%3A26%3A20Z&sks=b&skv=2021-08-06&sig=wuVZc%2BDm/bUpW1QnRrqqv8bMdp2T//il36swMU8YPd4%3D"
        }
    ]

    @staticmethod
    def extract_urls_from_response(response):
        return response["data"]

    @staticmethod
    def generate_image(description: str, mock: bool = True) -> list:
        # We have limited credits, this'll limit the credit usage on testing purposes
        if mock:
            return OpenAiService.mock_response

        # TODO let's generate more images, change this for the demo
        body = {
            "prompt": description,
            "n": 1,
            "size": "1024x1024",
        }

        response = RequestsService.post(OpenAiService.url, custom_headers=OpenAiService.headers, custom_body=body)

        # returns a dictionary with a key 'url'
        return OpenAiService.extract_urls_from_response(response)
