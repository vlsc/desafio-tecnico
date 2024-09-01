import re
from pydantic import BaseModel, field_validator


class User(BaseModel):
    username: str
    password: str


class Task(BaseModel):
    title: str
    description: str

class TaskWithId(BaseModel):
    id: int
    title: str
    description: str
