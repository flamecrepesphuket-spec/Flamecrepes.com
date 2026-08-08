type ImagePlaceholderProps = {
  label: string;
  detail: string;
  variant?: "hero" | "card" | "wide" | "tall";
};

export function ImagePlaceholder({ label, detail, variant = "card" }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder image-placeholder-${variant}`} aria-label={`${label} placeholder`}>
      <div className="placeholder-glow" />
      <div className="placeholder-content">
        <span>{label}</span>
        <small>{detail}</small>
      </div>
    </div>
  );
}
