import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bestSellers, brand, menuCategories, reviews } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Modern breakfast café · Phuket</p>
          <h1>Fresh crepes, generous breakfasts, and tropical café warmth.</h1>
          <p className="hero-description">{brand.tagline}</p>
          <div className="hero-actions">
            <Button href="#order">{brand.primaryCta}</Button>
            <Button href="#menu" variant="secondary">{brand.secondaryCta}</Button>
          </div>
          <div className="hero-stats" aria-label="Brand highlights">
            <span><strong>Fresh</strong> ingredients</span>
            <span><strong>Large</strong> portions</span>
            <span><strong>Fast</strong> service</span>
          </div>
        </div>
        <ImagePlaceholder label="Hero food photography" detail="Replace with Flame Crepes signature breakfast image" variant="hero" />
      </Container>
    </section>
  );
}

export function FreshIngredients() {
  return (
    <section className="section" id="fresh">
      <Container className="split-section">
        <SectionHeading eyebrow="Fresh ingredients" title="Premium products prepared with care every morning." description="A warm, polished café experience built around fresh fruit, rich fillings, crisp textures, and satisfying portions." />
        <div className="feature-card-list">
          {['Tropical fruit and bright toppings', 'Premium chocolate, cream, and sauces', 'Balanced sweet and savory combinations'].map((item) => <div className="feature-card" key={item}>{item}</div>)}
        </div>
      </Container>
    </section>
  );
}

export function OpenKitchen() {
  return (
    <section className="section section-warm" id="cooked-fresh">
      <Container className="media-feature">
        <ImagePlaceholder label="Open kitchen photo" detail="Crepes cooked fresh in the Flame Crepes kitchen" variant="wide" />
        <div>
          <SectionHeading eyebrow="Cooked fresh" title="An open-kitchen feeling with speed, aroma, and craft." description="Guests should feel the energy of breakfast being made now: warm pans, fresh batter, glossy toppings, and confident service." />
          <Button href="#menu" variant="secondary">Explore the menu</Button>
        </div>
      </Container>
    </section>
  );
}

export function BestSellers() {
  return (
    <section className="section" id="best-sellers">
      <Container>
        <SectionHeading align="center" eyebrow="Best sellers" title="Signature favorites designed to feel abundant and premium." />
        <div className="cards-grid">
          {bestSellers.map((item) => (
            <article className="menu-card" key={item.name}>
              <ImagePlaceholder label={item.name} detail="Food photo placeholder" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Breakfast() {
  return (
    <section className="section breakfast-section" id="breakfast">
      <Container className="breakfast-panel">
        <div>
          <p className="eyebrow">Breakfast in Phuket</p>
          <h2>Big morning plates for slow tropical starts and quick café stops.</h2>
          <p>From fresh crepes to hearty breakfast combinations, Flame Crepes is positioned for generous portions, premium ingredients, and smooth service.</p>
        </div>
        <ImagePlaceholder label="Breakfast plate" detail="Replace with premium breakfast photography" variant="tall" />
      </Container>
    </section>
  );
}

export function MenuCategories() {
  return (
    <section className="section" id="menu">
      <Container>
        <SectionHeading eyebrow="Menu categories" title="A focused café menu with sweet, savory, coffee, and breakfast moments." />
        <div className="category-grid">
          {menuCategories.map((category) => <a href="#order" className="category-tile" key={category}>{category}<span>View selection</span></a>)}
        </div>
      </Container>
    </section>
  );
}

export function Coffee() {
  return <FeatureBand id="coffee" eyebrow="Coffee" title="Smooth coffee for breakfast, dessert, and Phuket afternoons." label="Coffee photography" />;
}

export function Syrniki() {
  return <FeatureBand id="syrniki" eyebrow="Syrniki" title="Golden, tender syrniki with a café-perfect finish." label="Syrniki photography" reverse />;
}

function FeatureBand({ id, eyebrow, title, label, reverse = false }: { id: string; eyebrow: string; title: string; label: string; reverse?: boolean }) {
  return (
    <section className="section section-warm" id={id}>
      <Container className={`media-feature ${reverse ? 'media-feature-reverse' : ''}`}>
        <ImagePlaceholder label={label} detail="Replace with real Flame Crepes product photo" variant="wide" />
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} description="A calm, refined section with warm colors and simple copy that lets the future product photography lead." />
        </div>
      </Container>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="section" id="reviews">
      <Container>
        <SectionHeading align="center" eyebrow="Google reviews" title="Designed for warm words from happy guests." description="Review cards are ready for verified Google review content when available." />
        <div className="review-grid">
          {reviews.map((review) => <article className="review-card" key={review.author}><div className="stars">★★★★★</div><p>“{review.quote}”</p><strong>{review.author}</strong></article>)}
        </div>
      </Container>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <Container>
        <SectionHeading eyebrow="Photo gallery" title="A visual rhythm for crepes, coffee, kitchen details, and café atmosphere." />
        <div className="gallery-grid">
          {['Crepe detail', 'Fresh fruit', 'Coffee pour', 'Kitchen moment', 'Breakfast table', 'Café atmosphere'].map((label, index) => <ImagePlaceholder key={label} label={label} detail={`Gallery image ${index + 1}`} />)}
        </div>
      </Container>
    </section>
  );
}

export function Location() {
  return (
    <section className="section" id="location">
      <Container className="location-card">
        <div>
          <p className="eyebrow">Location</p>
          <h2>Find Flame Crepes in Phuket.</h2>
          <p>Google Maps integration can be connected here once the final listing URL is confirmed.</p>
          <Button href="#order" variant="secondary">Get directions</Button>
        </div>
        <div className="map-placeholder"><span>Google Maps placeholder</span><small>Embed real map here</small></div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta" id="order">
      <Container>
        <p className="eyebrow">Ready when you are</p>
        <h2>Order fresh crepes, breakfast, coffee, and syrniki from Flame Crepes Phuket.</h2>
        <div className="hero-actions center-actions">
          <Button href="tel:+66000000000">{brand.primaryCta}</Button>
          <Button href="#menu" variant="secondary">{brand.secondaryCta}</Button>
        </div>
      </Container>
    </section>
  );
}
