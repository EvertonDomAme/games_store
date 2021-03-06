import { useState } from 'react';
import './SignIn.css';
import axios from 'axios';

export default function Register() {

  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user ={
      name: name,
      email: email,
      nickname: nickname,
      password: password,
      passwordConfirmation: passwordConfirmation
    }
    try {
    axios.post('https://nintendo-shop.herokuapp.com/user/register', user)
    }
    catch (err) {console.log(err)}
  }

  return(
    <div className='register'>
      <div className='register-container'>
        <h2>Criar uma conta Nintendo</h2>
        <form className='register-form' onSubmit={handleSubmit} >
          <label>Nome</label>
          <input type='text' required onChange={event => setName(event.target.value)} />

          <label>Nickname</label>
          <input type='text' required onChange={event => setNickname(event.target.value)} />

          <label>Endereço de e-mail</label>
          <input type='email' required onChange={event => setEmail(event.target.value)} />

          <label>Senha</label>
          <input type='password' required onChange={event => setPassword(event.target.value)} />

          <label>Confirmar senha</label>
          <input type='password' required onChange={event => setPasswordConfirmation(event.target.value)} />

          <div className='terms'>
            <input type='checkbox' required />
            <label>Eu concordo com os termos do Acordo de usuário da conta GameDOM e confirmo que li a Política de privacidade da GameDOM.</label>
          </div>
          
          <div className='register-btn'>
            <input type='submit' value='Continuar' />
          </div>
        </form>
      </div>
    </div>
  )
}