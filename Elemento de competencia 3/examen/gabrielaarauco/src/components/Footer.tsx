type FooterProps = {
  company: string;
  year: number;
};

export default function Footer({ company, year }: FooterProps) {
  return (
    <footer className="footer">
      {company} © {year}
    </footer>
  );
}