import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/CreateGame/Form';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DeletedGame from './components/DeletedGame/DeletedGame';
import UpdateGame from './components/UpdateGame/UpdateGame';




function App() {
  const location= useLocation();
  
  
   return (
    <div className="App">
      {location.pathname!=='/' && <NavBar/>}

      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:idVideogame' element={<Detail/>}>
          <Route path=':deleteGame' element={<DeletedGame/>}></Route>
        </Route>
        <Route path='/createGame' element={<Form/>} />
        <Route path='/detail/:idVideogame/updateGame' element={<UpdateGame/>}/>
      </Routes>

      { location.pathname!== '/' && <Footer/>}
      
      
    </div>
  );
}

export default App;
