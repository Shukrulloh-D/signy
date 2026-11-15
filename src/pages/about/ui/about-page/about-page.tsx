import { Subscribe } from "@/features/subscribe";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { Partners } from "@/widgets/partners";
import "./about-page.css";

const TEXT =
  "Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу специалистов участие в формировании дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке модели развития.";

export function AboutPage() {
  return (
    <>
      <div className="container about-page">
        <Breadcrumbs
          items={[{ label: "Signy", to: "/" }, { label: "Про нас" }]}
        />
        <h1 className="page-title">Страница про нас</h1>
        <img
          className="about-page-wide"
          src="/images/about.png"
          alt="Команда Signy"
        />

        <p>{TEXT}</p>
        <p>{TEXT}</p>

        <figure className="about-page-quote">
          <img src="/images/about-quote.png" alt="" loading="lazy" />
          <blockquote>
            <p>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивают участие в формировании системы
              массового участия.
            </p>
            <footer>
              <b>Имя Фамилия</b>
              <span>Должность, CEO «Компания»</span>
            </footer>
          </blockquote>
        </figure>

        <p>{TEXT}</p>
      </div>

      <Partners />

      <div className="container about-page">
        <p>{TEXT}</p>
        <img
          className="about-page-signature"
          src="/images/signature.png"
          alt="Подпись"
          loading="lazy"
        />
      </div>

      <Subscribe />
    </>
  );
}
