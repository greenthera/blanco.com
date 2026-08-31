import { clinicImages, patientImages } from "../data/clinic";

type GallerySectionsProps = { onOpen: (index: number) => void };

export function GallerySections({ onOpen }: GallerySectionsProps) {
  return (
    <>
      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="section-label">Clinic gallery</p>
            <h2>
              Inside <em>Blanco.</em>
            </h2>
          </div>
          <div>
            <p>
              A calm, thoughtfully equipped setting designed to make dental
              visits feel more comfortable.
            </p>
            <span>Ghod Dod Road · Surat</span>
          </div>
        </div>
        <div className="gallery-grid clinic-gallery">
          {clinicImages.map((image, index) => (
            <button
              className="gallery-item"
              key={image.src}
              onClick={() => onOpen(index)}
              aria-label={`Open ${image.caption}`}
            >
              <span className="gallery-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span className="gallery-caption">
                <i>{image.caption}</i>
                <b>View ↗</b>
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="patient-gallery-section" id="patient-stories">
        <div className="patient-gallery-heading">
          <p className="section-label">Patient gallery</p>
          <h2>
            Real care.
            <br />
            <em>Real transformations.</em>
          </h2>
          <p>
            Selected clinical cases treated by Dr. Pooja Sheth. Every treatment
            plan and result is individual.
          </p>
        </div>
        <div className="patient-gallery-grid">
          {patientImages.map((image, index) => (
            <button
              className="patient-gallery-item"
              key={image.src}
              onClick={() => onOpen(clinicImages.length + index)}
              aria-label={`Open ${image.caption}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>
                <i>{image.caption}</i>
                <b>{String(index + 1).padStart(2, "0")} ↗</b>
              </span>
            </button>
          ))}
        </div>
        <p className="patient-disclaimer">
          Clinical images are shared for educational purposes. Individual
          results may vary.
        </p>
      </section>
    </>
  );
}
