import React from 'react';
import { useState } from 'react';
import './inventoryLog.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import Footer2 from '../../COMPONENTS/Footer/Footer2';


const InventoryLog = () => {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handleLogin = (e) =>{
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/new')
  })
  .catch((error) => {
    setError(true)
  });

  }

  return (
    
    <div className='inventory-log'>
     
      <form onSubmit={handleLogin}>
      
        <input type='email' placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Senha' onChange={e=>setPassword(e.target.value)}/>
        <button type='submit'> Login </button>
        {error && <span>Email ou senha incorretos</span>}
      </form>
      
    </div>
    
  );
};

export default InventoryLog;
