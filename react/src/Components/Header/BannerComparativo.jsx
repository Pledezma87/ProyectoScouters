import { Link } from "react-router-dom";

export function HeaderComparativo() {
  return (
    <header className="headerComparativo">
      <Link to="/" className="header__companyComparativo">
        <h1 className="header__company-nameComparativo">Scouters</h1>
        <span className="header__company-badgeComparativo">NEW ERA</span>
      </Link>
    </header>
  );
}