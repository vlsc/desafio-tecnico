from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base


class UserModel(Base):
    __tablename__ = 'users'
    id = Column('id', Integer, primary_key=True, nullable=False, autoincrement=True)
    username = Column('username', String, nullable=False, unique=True)
    password = Column('password', String, nullable=False)

    tasks = relationship("TaskModel", back_populates="user", cascade="all, delete-orphan")


class TaskModel(Base):
    __tablename__ = 'tasks'
    id = Column('id', Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id = Column('user_id', ForeignKey('users.id'), nullable=False)
    title = Column('title', String, nullable=False)
    description = Column('description', String)

    user = relationship("UserModel", back_populates="tasks")