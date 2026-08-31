import logo from "../assets/blanco-dental-house-logo-transparent.webp";
import { clinic, navigationItems } from "../data/clinic";

type SiteHeaderProps = {
  menuOpen: boolean;
  scrolled: boolean;
  onMenuToggle: () => void;
  onNavigate: () => void;
};

export function SiteHeader({
  menuOpen,
  scrolled,
  onMenuToggle,
  onNavigate,
}: SiteHeaderProps) {
  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <a className="brand" href="#home" onClick={onNavigate}>
        <img src={logo} alt="Blanco, The Dental House" />
      </a>
      <nav
        className={menuOpen ? "is-open" : ""}
        aria-label="Primary navigation"
        aria-hidden={!menuOpen && innerWidth <= 1100}
      >
        {navigationItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={onNavigate}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={clinic.phoneHref}>
        Book a visit
      </a>
      <button
        className="menu-toggle"
        onClick={onMenuToggle}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
