type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}