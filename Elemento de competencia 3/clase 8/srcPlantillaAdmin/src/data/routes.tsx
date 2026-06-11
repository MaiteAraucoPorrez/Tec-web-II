import Home from "../pages/Home";
import Usuarios from "../pages/Usuarios";
import Reportes from "../pages/Reportes";

export const routes = [
  {
    name: "Inicio",
    path: "/",
    element: <Home />
  },
  {
    name: "Usuarios",
    path: "/usuarios",
    element: <Usuarios />
  },
  {
    name: "Reportes",
    path: "/reportes",
    element: <Reportes />
  }
];