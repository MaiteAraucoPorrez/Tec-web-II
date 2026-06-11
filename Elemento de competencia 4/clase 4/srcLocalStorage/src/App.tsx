//importando componentes necesarios para rutear
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importamos Login, Dashboard y mas
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" 
          element={
            // PRIVATE ROUTE PROTEGE EL DASHBOARD
            <PrivateRoute>
               {/* COMPONENTE PRIVADO */}
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}