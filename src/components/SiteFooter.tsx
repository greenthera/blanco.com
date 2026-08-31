import logo from "../assets/blanco-dental-house-logo-transparent.webp";
import { clinic } from "../data/clinic";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <a className="footer-brand" href="#home">
          <img src={logo} alt="Blanco, The Dental House" />
        </a>
        <p>Gentle dental care in the heart of Surat.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#treatments">Treatments</a>
          <a href="#doctor">Doctor</a>
          <a href="#gallery">Gallery</a>
        </div>
        <div className="footer-contact">
          <a href={clinic.phoneHref}>{clinic.phoneDisplay}</a>
          <a href={clinic.mapsUrl} target="_blank" rel="noreferrer">
            Ghod Dod Road, Surat ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Blanco, The Dental House</span>
        <a
          className="design-credit"
          href="https://shivantra.com/"
          target="_blank"
          rel="noreferrer"
        >
          Designed by <strong>Shivantra</strong>
        </a>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
