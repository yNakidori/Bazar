import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../COMPONENTS/server/firebase';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import { Link } from 'react-router-dom';
import './AuthPage.css';
import './SignIn.css';

const SgUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sgUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert('Cadastro realizado com sucesso!');
        
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.error(error);
        alert('Erro ao cadastrar. Verifique suas informações e tente novamente.');
      });
  };

  return (
    <div className='sign-in-container'>
      <Navbar reloadnavbar={false} />

      <form className='cad' onSubmit={sgUp}>
        <h1>Cadastre-se</h1>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>signup</button>
      </form>

      <p className="login-link">
        Já tem uma conta? <Link to="/signin">Faça login agora!</Link>
      </p>

      <Footer2 />
    </div>
  );
};

export default SgUp;
