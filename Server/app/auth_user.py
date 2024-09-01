from sqlalchemy.orm import Session
from app.db.models import UserModel, TaskModel
from app.schemas import User, Task
from passlib.context import CryptContext
from fastapi.exceptions import HTTPException
from fastapi import status
from sqlalchemy.exc import IntegrityError
from datetime import datetime, timedelta, timezone
from jose import jwt, JWTError
from decouple import config


SECRET_KEY = config('SECRET_KEY')
ALGORITHM = config('ALGORITHM')
crypt_context = CryptContext(schemes=['sha256_crypt'])


class UserUseCases:
    def __init__(self, db_session: Session):
        self.db_session = db_session


    def user_register(self, user: User):
        user_model = UserModel(
            username=user.username,
            password=crypt_context.hash(user.password)
        )
        try:
            self.db_session.add(user_model)
            self.db_session.commit()
        except IntegrityError:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail='User already exists'
            )


    def user_login(self, user: User, expires_in: int = 30):
        user_on_db = self.db_session.query(UserModel).filter_by(username=user.username).first()

        if user_on_db is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Invalid username or password'
            )
        
        if not crypt_context.verify(user.password, user_on_db.password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Invalid username or password'
            )
        
        exp = datetime.now(timezone.utc) + timedelta(minutes=expires_in)

        payload = {
            'sub': user.username,
            'exp': exp
        }

        access_token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

        return {
            'access_token': access_token,
            'exp': exp.isoformat(),
            'user': user.username
        }


    def verify_token(self, access_token):
        try:
            data = jwt.decode(access_token, SECRET_KEY, algorithms=[ALGORITHM])
        except JWTError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Invalid acess token'
            )
        
        user_on_db = self.db_session.query(UserModel).filter_by(username=data['sub']).first()

        if user_on_db is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Invalid acess token'
            )
        
        return user_on_db


    def create_task_for_user(self, task: Task, user: User):
        user_on_db = self.db_session.query(UserModel).filter_by(username=user.username).first()
        new_task = TaskModel(
            title=task.title,
            description=task.description,
            user_id=user_on_db.id
        )
        self.db_session.add(new_task)
        self.db_session.commit()

        return new_task


    def delete_task_for_user(self, task_id: int):
        task = self.db_session.query(TaskModel).filter_by(id=task_id).first()

        if not task:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Task not found"
            )

        self.db_session.delete(task)
        self.db_session.commit()


    def list_tasks_for_user(self, user: User):
        user_on_db = self.db_session.query(UserModel).filter_by(username=user.username).first()
        tasks = self.db_session.query(TaskModel).filter(TaskModel.user_id == user_on_db.id).all()
        
        return tasks
