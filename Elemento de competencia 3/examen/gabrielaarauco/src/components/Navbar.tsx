import { NavLink } from "react-router-dom";
import { routes } from "../data/routes";

type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  return (
    <header className="header">
      <div className="nav">
        <h1>{title}</h1>
        <nav>
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}