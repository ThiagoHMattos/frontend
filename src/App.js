import Cadastro from './components/cadastro/Cadastro';
import Logo from './components/logo/logo'
import Login from './components/login/login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Footer from './components/Footer/footer';
// import './App.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo></Logo>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>

    </Routes>
    </BrowserRouter>

      </header>

      <Footer></Footer>
    </div>
  );
}

export default App;
