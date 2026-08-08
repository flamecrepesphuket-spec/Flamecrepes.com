import { brand } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>{brand.name}</strong>
          <span>{brand.location}</span>
        </div>
        <p>Fresh crepes, breakfast, coffee, and warm tropical café energy.</p>
        <div className="footer-links">
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>
          <a href="#order">Order</a>
        </div>
      </div>
    </footer>
  );
}
