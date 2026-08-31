import { useEffect, useState } from "react";
import logo from "./assets/blanco-dental-house-logo-transparent.webp";
import didYouKnowOralHealth from "./assets/did-you-know-oral-health.webp";
import doctorPooja from "./assets/dr-pooja-sheth-mehta.webp";
import { ContactSection } from "./components/ContactSection";
import { GallerySections } from "./components/GallerySections";
import { Lightbox } from "./components/Lightbox";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { clinic, galleryImages, serviceGroups } from "./data/clinic";
import "./App.css";
import "./menu-fix.css";

const reviews = [
  [
    "“One of the best smile designing and dental services. I was fully satisfied and would recommend them for any dental treatment.”",
    "Vimmi Mashruwala",
  ],
  [
    "“Dr. Pooja explained everything and made my root canal treatment painless. A calm and reassuring experience.”",
    "Patient review",
  ],
  [
    "“Excellent service, neat and clean. Very friendly to the patient, and she understands what she is doing.”",
    "Patient review",
  ],
];
function App() {
  const [menu, setMenu] = useState(false),
    [scrolled, setScrolled] = useState(false),
    [lightbox, setLightbox] = useState<number | null>(null);
  useEffect(() => {
    const fn = () => setScrolled(scrollY > 24);
    fn();
    addEventListener("scroll", fn);
    return () => removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
        setMenu(false);
      }
      if (lightbox !== null && e.key === "ArrowRight")
        setLightbox((lightbox + 1) % galleryImages.length);
      if (lightbox !== null && e.key === "ArrowLeft")
        setLightbox(
          (lightbox - 1 + galleryImages.length) % galleryImages.length,
        );
    };
    addEventListener("keydown", fn);
    document.body.style.overflow = lightbox !== null || menu ? "hidden" : "";
    return () => {
      removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [lightbox, menu]);
  useEffect(() => {
    const fn = () => {
      if (innerWidth > 1100) setMenu(false);
    };
    addEventListener("resize", fn);
    return () => removeEventListener("resize", fn);
  }, []);
  return (
    <main>
      <SiteHeader
        menuOpen={menu}
        scrolled={scrolled}
        onMenuToggle={() => setMenu((open) => !open)}
        onNavigate={() => setMenu(false)}
      />
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Gentle dentistry · Surat</p>
          <h1>
            Care that gives you a reason to <em>smile.</em>
          </h1>
          <p className="hero-intro">
            Modern dental care, thoughtfully delivered. At Blanco, every
            treatment begins with listening and ends with a smile that feels
            completely yours.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={clinic.phoneHref}>
              Book an appointment <span>→</span>
            </a>
            <a className="text-link" href="#treatments">
              Explore treatments <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="brand-card">
            <img src={logo} alt="Blanco, The Dental House" />
          </div>
          <p className="visual-note">
            A calm space.
            <br />A confident smile.
          </p>
        </div>
        <div className="hero-meta">
          <span>Ghod Dod Road, Surat</span>
          <span>Est. 2016</span>
          <span>4.9 ★ patient rating</span>
        </div>
      </section>
      <section className="intro-section" id="about">
        <p className="section-label">Our philosophy</p>
        <div className="intro-content">
          <h2>
            Good dentistry should feel <em>personal.</em>
          </h2>
          <div>
            <p>
              We believe comfort and clarity are just as important as clinical
              excellence. That means taking time to understand your concerns,
              explain every option, and make each visit feel reassuring from
              start to finish.
            </p>
            <a className="text-link" href="#doctor">
              Meet your dentist <span>→</span>
            </a>
          </div>
        </div>
      </section>
      <section className="treatments-section" id="treatments">
        <div className="section-heading">
          <div>
            <p className="section-label">Our services</p>
            <h2>
              Complete care for every <em>smile.</em>
            </h2>
          </div>
          <p>
            From routine dental care to restoration and smile enhancement, every
            treatment begins with a personal consultation.
          </p>
        </div>
        <div className="services-catalog">
          {serviceGroups.map((group) => (
            <article className="service-group" key={group.title}>
              <div className="service-group-heading">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.services.map((service) => (
                  <li key={service}>
                    <span>{service}</span>
                    <b>↗</b>
                  </li>
                ))}
              </ul>
              <a href={clinic.phoneHref}>
                Discuss your treatment <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="doctor-section" id="doctor">
        <div className="doctor-portrait">
          <img src={doctorPooja} alt="Dr. Pooja Sheth Mehta" loading="lazy" />
          <span>Blanco · The Dental House</span>
        </div>
        <div className="doctor-copy">
          <p className="section-label">Your dentist</p>
          <h2>
            Dr. Pooja
            <br />
            <em>Sheth Mehta</em>
          </h2>
          <p className="credential">BDS · MDS · Prosthodontist</p>
          <p>
            Dr. Pooja Sheth Mehta is a prosthodontist whose public professional
            profile lists dental practice since 2013. Patient reviews
            consistently describe her as polite, gentle and reassuring, with
            clear explanations throughout treatment.
          </p>
          <a className="button button-outline" href={clinic.phoneHref}>
            Schedule a consultation
          </a>
        </div>
      </section>
      <section
        className="credentials-section"
        aria-label="Dr. Pooja Sheth Mehta professional credentials"
      >
        <div className="credentials-intro">
          <p className="section-label">Professional profile</p>
          <h2>
            Experience backed by <em>specialist training.</em>
          </h2>
          <p>Published professional information for Dr. Pooja Sheth Mehta.</p>
        </div>
        <div className="credentials-grid">
          <article>
            <span>01</span>
            <div>
              <small>Qualification</small>
              <h3>Bachelor of Dental Surgery</h3>
              <p>Rajasthan University of Health Sciences · 2011</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <small>Specialisation</small>
              <h3>Master of Dental Surgery</h3>
              <p>Maharaja Sayajirao University of Baroda · 2018</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <small>Experience</small>
              <h3>Practising since 2013</h3>
              <p>
                Professional experience listed with Blanco, The Dental House.
              </p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <small>Registration</small>
              <h3>A-9431</h3>
              <p>
                Dental registration number shown on her public professional
                profile.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="reviews-section">
        <div className="section-heading reviews-heading">
          <div>
            <p className="section-label">Patient stories</p>
            <h2>
              Kind words. <em>Bright smiles.</em>
            </h2>
          </div>
          <span className="rating">4.9 / 5</span>
        </div>
        <div className="review-grid">
          {reviews.map(([q, n]) => (
            <figure key={q}>
              <blockquote>{q}</blockquote>
              <figcaption>
                {n}
                <span>★★★★★</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <GallerySections onOpen={setLightbox} />
      <section className="did-you-know-section">
        <div className="did-you-know-copy">
          <p className="section-label">Dental notes</p>
          <h2>
            Did you <em>know?</em>
          </h2>
          <p>
            Your mouth can offer important clues about your wider health.
            Regular dental examinations can help identify changes worth
            discussing with your dentist or physician.
          </p>
          <a className="button button-primary" href={clinic.phoneHref}>
            Book a dental check-up <span>→</span>
          </a>
        </div>
        <div className="did-you-know-card">
          <img
            src={didYouKnowOralHealth}
            alt="Did you know: teeth can reveal wider health issues"
            loading="lazy"
          />
        </div>
      </section>
      <div className="gallery-follow">
        <p>See the latest clinic moments and smile stories.</p>
        <a
          className="text-link"
          href={clinic.instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Follow Blanco on Instagram <span>↗</span>
        </a>
      </div>
      <section className="instagram-section" id="instagram">
        <div className="instagram-heading">
          <div>
            <p className="section-label">Follow along</p>
            <h2>
              From our <em>Instagram.</em>
            </h2>
          </div>
          <div>
            <p>
              Clinic updates, dental education and recent smile stories from{" "}
              <strong>@blanco.dentalsurat</strong>.
            </p>
            <a
              className="text-link"
              href={clinic.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open Instagram <span>↗</span>
            </a>
          </div>
        </div>
        <div className="instagram-embeds">
          <div className="instagram-frame instagram-profile-frame">
            <div className="instagram-frame-label">
              <span>Latest from the clinic</span>
              <b>@blanco.dentalsurat</b>
            </div>
            <iframe
              src="https://www.instagram.com/blanco.dentalsurat/embed/"
              title="Blanco Dental Surat Instagram profile and recent posts"
              loading="lazy"
              scrolling="no"
              allow="encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="instagram-frame instagram-reel-frame">
            <div className="instagram-frame-label">
              <span>Featured Reel</span>
              <b>Watch now</b>
            </div>
            <iframe
              src="https://www.instagram.com/reel/DWQuoxUDjaJ/embed/"
              title="Featured Blanco Dental Instagram Reel"
              loading="lazy"
              scrolling="no"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
        <div className="instagram-section-footer">
          <p className="instagram-note">
            Instagram content is loaded directly from Meta and may require
            cookies or permission to display.
          </p>
          <a href={clinic.instagramUrl} target="_blank" rel="noreferrer">
            Follow Blanco <strong>↗</strong>
          </a>
        </div>
      </section>
      <ContactSection />
      <SiteFooter />
      {lightbox !== null && (
        <Lightbox
          images={galleryImages}
          activeIndex={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}
    </main>
  );
}
export default App;
