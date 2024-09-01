from fastapi import APIRouter, Depends, status
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from app.depends import get_db_session, token_verifier
from app.auth_user import UserUseCases
from app.schemas import User, Task, TaskWithId
from fastapi.security import OAuth2PasswordRequestForm
from typing import List


user_router = APIRouter(prefix='/user')
task_router = APIRouter(prefix='/tasks', dependencies=[Depends(token_verifier)])

@user_router.post('/register')
def user_register(
    user: User,
    db_session: Session = Depends(get_db_session)
):
    uc = UserUseCases(db_session=db_session)
    uc.user_register(user=user)
    auth_data = uc.user_login(user=user)

    return JSONResponse(
        content=auth_data,
        status_code=status.HTTP_200_OK
    )


@user_router.post('/login')
def user_login(
    request_form_user: OAuth2PasswordRequestForm = Depends(),
    db_session: Session = Depends(get_db_session)
):
    uc = UserUseCases(db_session=db_session)
    user = User(
        username=request_form_user.username,
        password=request_form_user.password
    )
    auth_data = uc.user_login(user=user)
    return JSONResponse(
        content=auth_data,
        status_code=status.HTTP_200_OK
    )


@task_router.post('/')
def task_create(
    task: Task,
    db_session: Session = Depends(get_db_session),
    current_user: User = Depends(token_verifier)
):
    uc = UserUseCases(db_session=db_session)
    new_task = uc.create_task_for_user(task=task, user=current_user)
    
    return JSONResponse(
        content={'id': new_task.id, 'title': new_task.title, 'description': new_task.description},
        status_code=status.HTTP_201_CREATED
    )


@task_router.delete('/{task_id}')
def task_delete(
    task_id: int,
    db_session: Session = Depends(get_db_session),
):
    uc = UserUseCases(db_session=db_session)
    uc.delete_task_for_user(task_id=task_id)
    
    return JSONResponse(
        content={'msg': 'Task deleted successfully'}
    )


@task_router.get('/', response_model=List[TaskWithId])
def list_user_tasks(
    db_session: Session = Depends(get_db_session),
    current_user: User = Depends(token_verifier)
):
    uc = UserUseCases(db_session=db_session)
    task_list = uc.list_tasks_for_user(user=current_user)

    return task_list
