import Home from "../pages/Home";
import Huespedes from "../pages/Huespedes";
import Habitaciones from "../pages/Habitaciones";
import Reportes from "../pages/Reportes";
import Configuracion from "../pages/Configuracion";

export const routes = [
  {
    name: "Inicio",
    icon: "home",
    path: "/",
    element: <Home />
  },
  {
    name: "Huéspedes",
    icon: "users",
    path: "/huespedes",
    element: <Huespedes />
  },
  {
    name: "Habitaciones",
    icon: "bed-double",
    path: "/habitaciones",
    element: <Habitaciones />
  },
  {
    name: "Reportes",
    icon: "bar-chart-2",
    path: "/reportes",
    element: <Reportes />
  },
  {
    name: "Configuración",
    icon: "settings",
    path: "/configuracion",
    element: <Configuracion />
  }
];
