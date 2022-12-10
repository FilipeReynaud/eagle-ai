import json
from requests import request


class RequestsService:

    default_headers: dict = {}
    default_body: dict = {}

    @staticmethod
    def get(url: str, custom_headers: dict):
        headers = RequestsService.default_headers | custom_headers

        return request("GET", url, headers=headers).json()

    @staticmethod
    def post(url: str, custom_headers: dict, custom_body: dict = {}):
        headers = RequestsService.default_headers | custom_headers
        body = RequestsService.default_body | custom_body

        body_stringified = json.dumps(body)

        return request("POST", url, headers=headers, data=body_stringified).json()
