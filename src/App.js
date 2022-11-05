
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { NavBar } from './components/Style';



const App = () => {
  return (
    <div className="App">
      <NavBar>
        Todo List - React APP
      </NavBar>
    
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
