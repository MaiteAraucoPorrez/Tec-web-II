import type { JSX } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import { routes } from "./data/routes";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route
              key={index}
              index={route.path === "/"}
              path={route.path === "/" ? undefined : route.path.slice(1)}
              element={route.element}
            />
          ))}
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
