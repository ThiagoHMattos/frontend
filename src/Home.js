import React from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Home() {
    const userEmail = localStorage.getItem('user_email');
    const userName = localStorage.getItem('user_name');
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    if(!accessToken) {
        navigate('/login');
        return
    }
    else {
        return (
          <div
          style={{
            backgroundColor: '#046423',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '50px'
          }}
          > <div style={{ display: 'flex', gap: '55px', marginBottom: '20px' }}>
          <Link to={'/'} href="/"className="btn btn-outline-light btn-lg px-5">
            Login
          </Link>
          <Link to={'/cadastro'} className="btn btn-outline-light btn-lg px-5" >
            Cadastro
          </Link>
        </div>
            <h1 className="welcome">Bem-vindo</h1>
            <p>Você foi autenticado com sucesso, {userName}!</p>
            <p className="user-email">{userEmail}</p>
            </div>
        );
    };

    }

    

export default Home
