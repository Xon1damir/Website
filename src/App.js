
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login/Login';
import Order from './Order/Order'
import Customers from './Customers/customers';
function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route  path="/" element={<Login/>} />
              <Route path='/order' element={<Order/>}/>
              <Route path='/customers' element={<Customers/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
