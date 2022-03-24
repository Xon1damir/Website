import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import OrderListPage from "./order/list/OrderListPage";
import OrderDetailsPage from "./order/details/OrderDetailsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/order" element={<OrderListPage />} />
        <Route path="/order/1" element={<OrderDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
