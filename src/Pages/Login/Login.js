import Container from '../../Components/Container/Container';
import { useState } from 'react';
import './Login.css';
import axios from 'axios';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const login = {
      email: email,
      password: password
    }
    axios.post('/auth/login', login)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token);
    })
  }

  return (
    <>
      <Container >
        <div className='login'>
          <h2 className='login-title'>Conta Nintendo</h2>
          <div className='login-container'>
          
            <form className='login-form' onSubmit={handleSubmit} >
              <input type='text' placeholder='Endereço de e-mail' required onChange={event => setEmail(event.target.value)} />
              <input type='password' placeholder='Senha' onChange={event => setPassword(event.target.value)} />
              <div className='login-ok'>
                <a href='!#'>
                  <span>Esqueceu sua senha?</span>
                </a>
                <input type='submit' value='Fazer login' />
              </div>
            </form>
            <div className='login-create'>
              <span>Ainda não possui uma conta?</span>
              <a className='btn-create' href='/register'>Criar uma conta Nintendo</a>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}