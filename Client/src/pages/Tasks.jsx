import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../App.css'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Side } from '../components/Side'
import profile from '../assets/profile.svg'
import small_logo from '../assets/small_logo.svg'
import medium_logo from '../assets/medium_logo.svg'
import plus_circle from '../assets/plus_circle.svg'
import deleteBin from '../assets/delete-bin-6-line.svg'
import close from '../assets/close.svg'
import { Profile } from '../components/Profile'
import { Footer } from '../components/Footer'
import { Box } from '../components/Box'
import { List } from '../components/List'
import { TaskCard } from '../components/TaskCard'
import { Body } from '../components/Body'
import { Modal } from '../components/Modal'
import { FormField, Input, TextArea } from '../components/FormField'
import { Button } from '../components/Button'
import { Dropdown, DropdownMenu } from '../components/DropdownMenu'

function Tasks() {
  const [openModal, setOpenModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [userTasks, setUserTasks] = useState([]);
  const [username, setUsername] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [alert, setAlert] = useState(false);
  const [openedTask, setOpenedTask] = useState(null);
  const [openModalTask, setOpenModalTask] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setNewTaskTitle('');
    setNewTaskDescription('');
    setOpenModal(false);
  }

  const openTaskModal = (task) => {
    setOpenedTask(task);
    setOpenModalTask(true);
  }

  const fetchTasks = () => {
    axios.get('http://localhost:8000/tasks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        setUserTasks(res.data)
      })
      .catch(error => {
        console.error({error});
      });
  }

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    fetchTasks();
  }, []);

  const handleCreation = () => {
    if(!newTaskTitle){
      setAlert(true);

      return;
    }

    closeModal();
  
    axios
    .post("http://localhost:8000/tasks",
    {
      title: newTaskTitle,
      description: newTaskDescription,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      setUserTasks([...userTasks, res.data]);
      setOpenModal(false);
    }).catch((err) => {
      alert('Houve um erro na criação, tente novamente.');
    })
  }

  const handleDelete = (task_id) => {
    axios
    .delete(`http://localhost:8000/tasks/${task_id}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
      }
    )
    .then((res) => {
      fetchTasks();
    }).catch((err) => {
      alert('Houve um erro ao deletar, tente novamente.');
    })
  }

  return (
    <>
      <Modal open={openModalTask}>
        <div className='task-modal'>
          <img src={close} alt='closeButton' onClick={() => setOpenModalTask(false)} />
          <h1>{openedTask?.title}</h1>
          <span>{openedTask?.description}</span>
        </div>
      </Modal>
      <Modal open={openModal}>
        <div className='modal-content'>
          <img src={close} alt='closeButton' onClick={closeModal} />
          <h1>Criar tarefa</h1>
          <FormField>
            <label>Título</label>
            <Input placeholder='Insira o título da tarefa' onChange={(e) => setNewTaskTitle(e.target.value)} value={newTaskTitle}></Input>
            {alert && <span className='alert'>Título não pode ficar vazio</span>}
          </FormField>
          <FormField>
            <label>Descrição</label>
            <TextArea placeholder='Insira a descrição da tarefa' onChange={(e) => setNewTaskDescription(e.target.value)} value={newTaskDescription}></TextArea>
          </FormField>
          <Button onClick={handleCreation}>
            <span>Adicionar</span>
          </Button>
        </div>
      </Modal>
      <Body>
        <Header>
          <Dropdown onMouseOver={() => setOpenDropdown(true)} onMouseOut={() => setOpenDropdown(false)}>
            <img src={small_logo} />
            <DropdownMenu open={openDropdown}>
              <span onClick={() => {localStorage.removeItem("token"); navigate('/login')}}>Sair</span>
            </DropdownMenu>
          </Dropdown>
        </Header>
        <Container>
          <Side>
            <Profile>
              <img width={'100px'} src={profile} alt="profile" />
              <span>{`Olá, ${username}`}</span>
            </Profile>
            <Footer>
              <img src={medium_logo} />
              <div>
                <span>do it!</span>
                <p>seu to do app favorito :)</p>
              </div>
            </Footer>
          </Side>
          <Box>
            <div className='header'>
              <h1>Minhas tasks</h1>
              <img src={plus_circle} onClick={() => setOpenModal(true)} />
            </div>
            <List className='list'>
              {userTasks.map((task) => (
                <TaskCard>
                  <div>
                    <span className='title' onClick={() => openTaskModal(task)}>{task.title}</span>
                    <span className='description'>{task.description}</span>
                  </div>
                  <img src={deleteBin} onClick={() => { if(window.confirm("Tem certeza que deseja deletar?")) handleDelete(task.id)}} />
                </TaskCard>
              ))}
            </List>
          </Box>
        </Container>
      </Body>
    </>
  )
}

export default Tasks;
