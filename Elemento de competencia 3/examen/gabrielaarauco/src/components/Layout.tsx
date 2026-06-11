import { Outlet, NavLink } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { routes } from "../data/routes";

export default function Layout() {
  const menu = routes.map((route) => ({
    name: route.name,
    path: route.path
  }));

  return (
    <>
      <Navbar title="🌈 Kinder Feliz" />

      <div className="container">
        <main className="main">
          <Outlet />
        </main>
      </div>

      <Footer company="Kinder Feliz" year={2026} />
    </>
  );
}