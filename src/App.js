 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmpCreate from './EmpCreate';
import EmpListing from './EmpListing';
import EmpEdit from './EmpEdit';
import EmpDetail from './EmpDetail';

function App() {
  return (
    <div className="App">
     <h1>React JS CRUD Operations</h1>
     <BrowserRouter>
  <Routes>
    <Route  path='/' element={<EmpListing />}></Route>
    <Route  path='/employee/create' element={<EmpCreate />}></Route>
    <Route  path='/employee/edit/:empid' element={<EmpEdit />}></Route>
    <Route  path='/employee/detail/:empid' element={<EmpDetail />}></Route>   
  </Routes>
  </BrowserRouter>
    </div>
  );
  
}

export default App;
