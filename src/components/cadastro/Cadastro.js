import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './ValidaçãoCadastro'
import { useState } from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import  './modal.css';

function Cadastro() {
    const [values, setValues] = useState({
        name: '',
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
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/cadastrar', values)
            .then((response) => {
                // Verifique o código de status da resposta
                if (response.status === 201) {
                  // Status 200 - Sucesso, redirecione
                  navigate('/');
                } 
                else {
                  // Outro código de status, faça algo diferente
                  console.log('Algo deu errado, código de status:', response.status);
                  // Aqui você pode tratar outros códigos de status, se necessário
                }
              })
              .catch((error) => {
                // Verifique o código de status da resposta no bloco catch
                if (error.response && error.response.status === 400) {
                    setErrorMessage('Este e-mail já foi cadastrado no sistema, utilize outro!');
                    setIsModalOpen(true);                  
                } else {
                  console.log('Erro na solicitação:', error);
                }
              });
          }
        };
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }
  return (
    <section className="vh-10 gradient-custom" style={{ backgroundColor: '#046423' }}>
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-success text-white">
            <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                <h2 className="fw-bold mb-2 text-uppercase">Realize o Seu cadastro</h2>
                <form action="" onSubmit={handleSubmit}>

                    <p className="text-white-50 mb-5">Insira abaixo o seu Nome, E-mail e Senha.</p>

                    <div className="form-outline form-white mb-4">
                        <input type="nome" id="typeNameX" onChange={handleInput} className="form-control form-control-lg" name='name' />
                        <p>{errors.name && <span className='text-danger'> {errors.name}</span>}</p>
                        <label className="form-label" htmlFor="nameInput">Nome</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" onChange={handleInput} className="form-control form-control-lg" name='email' />
                        <p>{errors.email && <span className='text-danger'> {errors.email}</span>}</p>
                        <label className="form-label" htmlFor="emailInput">E-mail</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" onChange={handleInput} className="form-control form-control-lg"  name='password'/>
                        <p>{errors.password && <span className='text-danger'> {errors.password}</span>}</p>
                        <label className="form-label" htmlFor="passwordInput">Senha*</label>
                    </div>
                    <p className="small mb-5 pb-lg-2"><label className="text-white-50" href="#!">* A senha deve conter acima de 8 caractéres contendo um especial ao menos.</label></p>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Cadastrar</button>
                    <Modal isOpen={isModalOpen} className="custom-modal">
                    <div className="modal-content2">
                        <p className="error-message">{errorMessage}</p>
                        <button className="close-button" onClick={() => setIsModalOpen(false)}>
                        Estou de Acordo
                        </button>
                    </div>
                    </Modal>                 
    
                </form>
                </div>
                <p className="mb-0">Já realizou o cadastro?  <Link to ='/' className="text-white-50 fw-bold">Faça o Login</Link>
                </p>
                
                

            </div>
            </div>
        </div>
        </div>
    </div>
</section>  )
}

export default Cadastro