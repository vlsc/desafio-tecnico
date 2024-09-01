import { useState } from 'react'
import axios from 'axios';
import '../App.css'
import { Body } from '../components/Body'
import { FormField, Input } from '../components/FormField'
import { FormLogin, LoginContainer } from '../components/Login'
import { Button } from '../components/Button'
import medium_logo from '../assets/medium_logo.svg'
import { Logo } from '../components/Logo'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  function handleLogin() {
    setIsLoading(true);

    const form_data = new FormData()

    form_data.append("username", username)
    form_data.append("password", password)

    axios
    .post("http://localhost:8000/user/login", form_data)
    .then((res) => {
      console.log(res)
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
                    <h3>Entrar</h3>
                </div>
                <div className='divider'></div>
                <FormField>
                    <label>Usuário</label>
                    <Input placeholder='exemplo' onChange={(e) => setUsername(e.target.value)}></Input>
                </FormField>
                <FormField>
                    <label>Senha</label>
                    <Input type='password' placeholder='********' onChange={(e) => setPassword(e.target.value)}></Input>
                </FormField>
                {alert && <span className='alert'>Usuário e/ou senha incorretos.</span>}
                <Button onClick={handleLogin} disabled={isLoading}>
                    <span>Entrar</span>
                </Button>
                <a href='/register'>Não tem conta? Cadastre-se!</a>
            </FormLogin>
        </LoginContainer>
      </Body>
    </>
  )
}

export default Login;
