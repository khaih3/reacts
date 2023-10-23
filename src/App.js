import logo from './logo.svg';
import './App.css';
import AboutUs from './Component/AboutUs/AboutUs';
import Form from './Component/Form/Form';
import HomePage from './Component/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import Menu from './Component/Menu/Menu';


function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gioi-thieu' element={<AboutUs />} />
        <Route path='/post' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
