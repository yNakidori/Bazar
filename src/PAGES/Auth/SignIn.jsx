import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../COMPONENTS/server/firebase';
import { Link } from 'react-router-dom';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import './AuthPage.css';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Redirecione para a página 'teclados' após o login bem-sucedido
        window.location.href = '/teclados';
      })
      .catch((error) => {
        console.error(error);
        setError('Login incorreto. Verifique suas credenciais.');
      });
  };

  return (
    <div className='sign-in-container'>
      <Navbar reloadnavbar={false} />

      <form className='cad' onSubmit={signIn}>
        <h1>Entrar</h1>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>

        {error && <p className="error-message">{error}</p>}

        <p className="signup-link">
          Ainda não tem uma conta? <Link to="/SgUp">Crie uma agora!</Link>
        </p>
      </form>

      <Footer2 />
    </div>
  );
};

export default SignIn;
