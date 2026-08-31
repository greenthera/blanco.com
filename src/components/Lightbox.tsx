import type { MouseEvent } from "react";
import type { GalleryImage } from "../data/clinic";

type LightboxProps = {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onChange,
}: LightboxProps) {
  const stopClosing = (event: MouseEvent) => event.stopPropagation();
  const previous = (activeIndex - 1 + images.length) % images.length;
  const next = (activeIndex + 1) % images.length;
  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery photo viewer"
      onClick={onClose}
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close photo"
      >
        Close ×
      </button>
      <button
        className="lightbox-arrow lightbox-prev"
        onClick={(event) => {
          stopClosing(event);
          onChange(previous);
        }}
        aria-label="Previous photo"
      >
        ←
      </button>
      <img
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        onClick={stopClosing}
      />
      <span className="lightbox-count">
        {activeIndex + 1} / {images.length}
      </span>
      <button
        className="lightbox-arrow lightbox-next"
        onClick={(event) => {
          stopClosing(event);
          onChange(next);
        }}
        aria-label="Next photo"
      >
        →
      </button>
    </div>
  );
}
