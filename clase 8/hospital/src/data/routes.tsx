import Home from "../pages/Home";
import Pacientes from "../pages/Pacientes";
import Reportes from "../pages/Reportes";

export const routes = [
  {
    name: "Inicio",
    path: "/",
    element: <Home />
  },
  {
    name: "Pacientes",
    path: "/pacientes",
    element: <Pacientes />
  },
  {
    name: "Reportes",
    path: "/reportes",
    element: <Reportes />
  }
];