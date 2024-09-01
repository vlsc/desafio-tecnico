import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css'
import { Body } from '../components/Body'
import { FormField, Input } from '../components/FormField'
import { FormLogin, LoginContainer } from '../components/Login'
import { Button } from '../components/Button'
import medium_logo from '../assets/medium_logo.svg'
import { Logo } from '../components/Logo'

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  function registerUser() {
    setIsLoading(true);

    console.log(username, password)

    axios
    .post("http://localhost:8000/user/register", {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem("username", res.data.user);
      localStorage.setItem("token", res.data.access_token);

      navigate(`/`);
    }).catch((err) => {
      setAlert(true);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <>
      <Body>
        <LoginContainer>
            <Logo>
                <img src={medium_logo} />
                <div>
                    <span>do it!</span>
                    <p>seu to do app favorito :)</p>
                </div>
            </Logo>
            <FormLogin>
                <div className='title'>
                    <h3>Cadastrar</h3>
                </div>
                <div className='divider'></div>
                <FormField>
                    <label>Usuário</label>
                    <Input placeholder='Escolha um nome de usuário' onChange={(e) => setUsername(e.target.value)}></Input>
                </FormField>
                <FormField>
                    <label>Senha</label>
                    <Input type='password' placeholder='********' onChange={(e) => setPassword(e.target.value)}></Input>
                </FormField>
                {alert && <span className='alert'>Usuário/senha não pode ficar vazio.</span>}
                <Button onClick={registerUser} disabled={isLoading}>
                    <span>Cadastrar</span>
                </Button>
                
                <a href='/login'>Já tem conta? Faça login!</a>
            </FormLogin>
        </LoginContainer>
      </Body>
    </>
  )
}

export default Register;
