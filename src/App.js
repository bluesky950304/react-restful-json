 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmpListing from './EmpListing';

function App() {
  return (
    <div className="App">
     <h1>ReactJS CRUD Operations</h1>
     <BrowserRouter>
  <Routes>
    <Route  path='/' element={<EmpListing />}>

    </Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
  
}

export default App;
