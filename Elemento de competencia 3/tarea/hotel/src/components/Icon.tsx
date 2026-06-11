import type { JSX } from "react";
import {
  Home,
  Users,
  BedDouble,
  BarChart2,
  Settings,
  Hotel,
  Sun,
  Moon,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.FC<LucideProps>> = {
  home: Home,
  users: Users,
  "bed-double": BedDouble,
  "bar-chart-2": BarChart2,
  settings: Settings,
  hotel: Hotel,
  sun: Sun,
  moon: Moon,
};

type IconProps = LucideProps & {
  name: string;
};

export default function Icon({ name, ...props }: IconProps): JSX.Element | null {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component {...props} />;
}
