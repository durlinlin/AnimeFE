import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Display from './Display';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/anime/:title' element={<Display />}></Route>
      </Routes>
    </div>
  );
}

export default App;
