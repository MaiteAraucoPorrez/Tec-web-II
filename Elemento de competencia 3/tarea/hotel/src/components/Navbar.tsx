import type { JSX } from "react";
import Icon from "./Icon";

type NavbarProps = {
  title: string;
  darkMode: boolean;
  onToggleDark: () => void;
};

export default function Navbar({ title, darkMode, onToggleDark }: NavbarProps): JSX.Element {
  return (
    <header className="header">
      <h1>
        <Icon name="hotel" size={22} strokeWidth={1.75} />
        {title}
      </h1>
      <div className="header-right">
        <button className="dark-toggle" onClick={onToggleDark}>
          {darkMode
            ? <><Icon name="sun" size={15} strokeWidth={2} /> Claro</>
            : <><Icon name="moon" size={15} strokeWidth={2} /> Oscuro</>
          }
        </button>
      </div>
    </header>
  );
}
