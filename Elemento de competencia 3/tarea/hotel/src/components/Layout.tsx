import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { routes } from "../data/routes";

export default function Layout(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const menu = routes.map((route) => ({
    name: route.name,
    icon: route.icon,
    path: route.path,
  }));

  return (
    <>
      <Navbar
        title="Hotel Grand Palace"
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
      />

      <div className="container">
        <Sidebar menu={menu} />

        <main className="main">
          <Outlet />
        </main>
      </div>

      <Footer hotel="Hotel Grand Palace" year={2026} />
    </>
  );
}
