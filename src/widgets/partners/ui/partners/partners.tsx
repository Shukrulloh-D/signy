import { Slider } from "@/shared/ui/slider";
import "./partners.css";

const BASE_PARTNERS = ["УкрОбронПром", "Новая Почта", "N-iX", "Хлеб"].map(
  (name, index) => ({
    id: index + 1,
    name,
    image: `/images/partner-${index + 1}.png`,
  }),
);

// Первый слайд:, второй слайд: [3, 4, 1, 2]
const SLIDES_DATA = [
  BASE_PARTNERS,
  [...BASE_PARTNERS.slice(2), ...BASE_PARTNERS.slice(0, 2)],
];

export function Partners() {
  const slides = SLIDES_DATA.map((page, pageIndex) => (
    <ul key={`slide-${pageIndex}`} className="partners-list container">
      {page.map((partner) => (
        <li key={`${pageIndex}-${partner.id}`} className="partners-item">
          <img src={partner.image} alt={partner.name} loading="lazy" />
        </li>
      ))}
    </ul>
  ));

  return (
    <section className="section partners-section">
      <h2 className="title">Друзья Signy</h2>
      <Slider slides={slides} />
    </section>
  );
}
