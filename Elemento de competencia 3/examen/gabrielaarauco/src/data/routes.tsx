import Home from "../pages/Home";
import Paralelos from "../pages/Paralelos";
import Reportes from "../pages/Reportes";


export const routes = [
  {
    name: "Dashboard",
    icon: "home",
    path: "/",
    element: <Home />
  },
  {
    name: "Paralelos",
    icon: "bed-double",
    path: "/paralelos",
    element: <Paralelos />
  },
  {
    name: "Reportes",
    icon: "bar-chart-2",
    path: "/reportes",
    element: <Reportes />
  }
];
