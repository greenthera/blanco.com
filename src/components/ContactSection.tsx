import type { FormEvent } from "react";
import { clinic, serviceOptions } from "../data/clinic";

function submitAppointment(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const text = encodeURIComponent(
    `Hello Blanco Dental House, I would like to request an appointment.\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nTreatment: ${data.get("service")}\nMessage: ${data.get("message") || "Not provided"}`,
  );
  window.open(
    `https://wa.me/${clinic.whatsappNumber}?text=${text}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <p className="section-label">Contact us</p>
        <h2>
          Let’s talk about your <span className="title-accent">smile.</span>
        </h2>
        <p className="contact-intro">
          Tell us what brings you to Blanco and our clinic team will help you
          plan the right next step.
        </p>
        <div className="contact-details">
          <div>
            <span>Call us</span>
            <a className="contact-primary-link" href={clinic.phoneHref}>
              {clinic.phoneDisplay}
            </a>
            <p>
              Call the clinic to confirm current hours and arrange your visit.
            </p>
          </div>
          <div>
            <span>Visit us</span>
            <p>
              Shops 3–6, Amar Kirti Apartment,
              <br />
              beside Shivaji Garden, Jamna Nagar,
              <br />
              Ghod Dod Road, Surat 395007
            </p>
            <a href={clinic.mapsUrl} target="_blank" rel="noreferrer">
              Get directions ↗
            </a>
          </div>
        </div>
      </div>
      <form
        className="contact-form"
        id="book"
        onSubmit={submitAppointment}
      >
        <div className="form-heading">
          <span>Appointment enquiry</span>
          <b>We’ll continue on WhatsApp</b>
        </div>
        <label>
          <span>Your name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          <span>Phone number</span>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>
        <label>
          <span>How can we help?</span>
          <select name="service" defaultValue="Consultation" required>
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Anything else?</span>
          <textarea
            name="message"
            placeholder="Briefly tell us about your concern"
            rows={3}
          />
        </label>
        <button className="contact-submit" type="submit">
          Send appointment request <span>→</span>
        </button>
        <small>
          Submitting opens WhatsApp with your enquiry. No information is stored
          on this website.
        </small>
      </form>
    </section>
  );
}
