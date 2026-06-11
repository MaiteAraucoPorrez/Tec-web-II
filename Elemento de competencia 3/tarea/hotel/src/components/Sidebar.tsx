import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

type MenuItem = {
  name: string;
  icon?: string;
  path: string;
};

type SidebarProps = {
  menu: MenuItem[];
};

export default function Sidebar({ menu }: SidebarProps): JSX.Element {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.icon && (
                <span className="sidebar-icon">
                  <Icon name={item.icon} size={18} strokeWidth={1.75} />
                </span>
              )}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
