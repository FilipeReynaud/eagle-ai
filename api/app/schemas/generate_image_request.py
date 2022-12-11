from pydantic import BaseModel, root_validator


class GenerateImageRequest(BaseModel):
    """Describes the structure for an image request"""

    description: str

    mock: bool = True

    @root_validator
    def description_length(cls, values):
        if "description" not in values or len(values["description"]) > 1000:
            raise ValueError("description must be defined cant have more than 1k requests")

        return values
