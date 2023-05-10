import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/CreateGame/Form';
import NavBar from './components/NavBar/NavBar';

function App() {
  const location= useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:idVideogame' element={<Detail/>} />
        <Route path='/createGame' element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
