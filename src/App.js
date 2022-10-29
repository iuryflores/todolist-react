
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage.js'


const App = () => {
  return (
    <div className="App">
      <div id='nav'>
        Todo List - React APP
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
