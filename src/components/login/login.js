import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'
import Validation from './ValidaçãoLogin';
import axios from 'axios';
import Modal from 'react-modal';
import '../cadastro/modal.css';


function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)

            .then((response) => {

                if (response.status === 200) { 
                    console.log(response.data)
                    const accessToken = response.data.accessToken;
                    const name = response.data.name;
                    localStorage.setItem('user_name', name);
                    localStorage.setItem('user_email', values.email);
                    localStorage.setItem('accessToken', accessToken ) 
                    navigate('/home');
                } 
                else {
                  console.log('Algo deu errado, código de status:', response.status);
                }
              })
              .catch((error) => {
                if (error.response && error.response.status === 401) {
                    setErrorMessage('Usuário não autorizado.');
                    setIsModalOpen(true); 
                } else {
                  console.log('Erro na solicitação:', error);
                }
              });
        }
    }
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }
  return (
    <section className="vh-10 gradient-custom" style={{ backgroundColor: '#046423' }}>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-success text-white">
                <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4 pb-5">

                    <h2 class="fw-bold mb-2 text-uppercase">Faça o seu Login</h2>
                    <form action='' onSubmit={handleSubmit}>

                        <p class="text-white-50 mb-5">Insira abaixo o seu E-mail e Senha.</p>
                        
                        <div class="form-outline form-white mb-4">
                            <input type="email" id="typeEmailX" onChange={handleInput} name='email' class="form-control form-control-lg" />
                            <p>{errors.email && <span className='text-danger'> {errors.email}</span>}</p>
                            <label class="form-label" for="typeEmailX">E-mail</label>
                        </div>

                        <div class="form-outline form-white mb-4">
                            <input  type="password" id="typePasswordX" onChange={handleInput} name ='password' class="form-control form-control-lg" />
                            <p>{errors.password && <span className='text-danger'> {errors.password}</span>}</p>
                            <label class="form-label" for="typePasswordX">Senha</label>

                        </div>
                        <button class="btn btn-outline-light btn-lg px-5" type="submit">Entrar</button>
                        <Modal isOpen={isModalOpen} className="custom-modal" ariaHideApp={false}>
                            
                        <div className="modal-content2">
                            <p className="error-message">{errorMessage}</p>
                            <button className="close-button" onClick={() => setIsModalOpen(false)}>
                            Fechar
                            </button>
                        </div>
                        </Modal> 


                    </form>
                    </div>

                    <div>
                    <p class="mb-0">Ainda não criou uma conta? <Link to ='cadastro' class="text-white-50 fw-bold">Cadastre-se</Link>
                    </p>
                    </div>

                </div>
                </div>
            </div>
            </div>
        </div>
</section>
  )
}

export default Login