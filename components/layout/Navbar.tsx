import { brand, navItems } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="navbar">
      <a className="brand-mark" href="#top" aria-label="Flame Crepes home">
        <span>{brand.name}</span>
        <small>{brand.location}</small>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <div className="language-switcher" aria-label="Language options">
          {brand.languages.map((language) => (
            <span key={language}>{language}</span>
          ))}
        </div>
        <Button href="#order">{brand.primaryCta}</Button>
      </div>
    </header>
  );
}
