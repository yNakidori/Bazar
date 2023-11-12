import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

const ForgotPassword = () => {
  return (
    <div className='authpage'>
        <Navbar/>

        <div className='authcont'>
            <img src='https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

            <form className='authform'>
                <h1>Esqueci a minha senha</h1>

                <div className='formgroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Digite seu email' />
                </div>

                <div className='form-group-row'>

                <div className='formgroup'>
                    <label htmlFor='password'>Senha</label>
                    <input type='password' id='password' placeholder='Digite sua senha' />
                </div>

                <div className='formgroup'>
                    <label htmlFor='cpassword'>Confirme a nova senha</label>
                    <input type='password' id='cpassword' placeholder='Digite sua senha' />
                </div>

                </div>

                <Link to='/login'
                className='stylenone'
                >
                <p>Lembrei a minha senha</p>
                </Link>

                <Link to='/signup'
                className='stylenone'
                >
                <button className='btn'>Confirmar</button>
                </Link>

            </form>
        </div>
    </div>
  )
}

export default ForgotPassword