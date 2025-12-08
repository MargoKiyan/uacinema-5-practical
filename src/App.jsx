import { useMemo, useState } from "react";
import "./App.css";

const movies = [
  {
    title: "Довбуш",
    year: 2023,
    genre: "Історичний бойовик",
    duration: "2 год 7 хв",
    rating: "8.6",
    description:
      "Легенда Карпат про ватажка опришків, що кидає виклик імперії.",
  },
  {
    title: "Мирний-21",
    year: 2023,
    genre: "Військова драма",
    duration: "1 год 50 хв",
    rating: "8.2",
    description:
      "Історія прикордонників Луганщини у перші дні повномасштабного вторгнення.",
  },
  {
    title: "Стоп-Земля",
    year: 2021,
    genre: "Драма",
    duration: "2 год",
    rating: "8.0",
    description: "Тепла й чесна історія дорослішання київських підлітків.",
  },
  {
    title: "Плем'я",
    year: 2014,
    genre: "Кримінальна драма",
    duration: "2 год 6 хв",
    rating: "7.9",
    description:
      "Сувора історія в інтернаті для глухих, розказана мовою жестів.",
  },
  {
    title: "Атлантида",
    year: 2019,
    genre: "Антивоєнна фантастика",
    duration: "1 год 48 хв",
    rating: "7.6",
    description:
      "Поствоєнний Донбас 2025 року: пошук сенсів у зруйнованому світі.",
  },
  {
    title: "Мої думки тихі",
    year: 2019,
    genre: "Трагікомедія",
    duration: "1 год 44 хв",
    rating: "8.3",
    description:
      "Звукорежисер Вадим їде на Закарпаття записувати рідкісну пташку.",
  },
];

const tags = [
  "Новинки",
  "Топ в Україні",
  "Документальні",
  "Серіали",
  "Для родини",
];

function App() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return movies;
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(q) ||
        movie.genre.toLowerCase().includes(q) ||
        movie.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">Ua</div>
          <span className="brand-name">Cinema</span>
        </div>
        <nav className="nav">
          <a href="#">Головна</a>
          <a href="#">Фільми</a>
          <a href="#">Серіали</a>
        </nav>
        <div className="top-actions">
          <button className="ghost">UA</button>
          <button className="primary">Увійти</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Стрімінг українського кіно</p>
            <h1>Дивись українське — відкривай нові історії</h1>
            <p className="lede">
              Найкращі фільми й серіали українських режисерів, прем&apos;єри та
              фестивальні хіти. Дивись у Full HD та додавай у власні добірки.
            </p>
            <div className="hero-actions">
              <button className="primary">Почати перегляд</button>
              <button className="ghost">Дивитися трейлер</button>
            </div>
            <div className="hero-meta">
              <span>Без реклами</span>
              <span>Субтитри та дубляж</span>
              <span>Скачування офлайн</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="badge">Тренд тижня</div>
            <h3>Довбуш</h3>
            <p>Історичний бойовик • 2023</p>
            <div className="hero-stats">
              <span>IMDB 8.6</span>
              <span>2 год 7 хв</span>
            </div>
            <button className="primary wide">Дивитися зараз</button>
          </div>
        </section>

        <section className="search-panel">
          <div>
            <p className="eyebrow">Пошук</p>
            <h2>Знайди свій фільм</h2>
          </div>
          <div className="search-box">
            <input
              type="search"
              placeholder="Назва, жанр, актор..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="primary">Пошук</button>
          </div>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section className="grid">
          <header className="section-heading">
            <div>
              <p className="eyebrow">Каталог</p>
              <h2>Українські прем&apos;єри та класику</h2>
            </div>
            <button className="ghost">Переглянути все</button>
          </header>
          <div className="cards">
            {filtered.map((movie) => (
              <article className="card" key={movie.title}>
                <div className="card-top">
                  <div className="pill">{movie.genre}</div>
                  <span className="rating">★ {movie.rating}</span>
                </div>
                <h3>{movie.title}</h3>
                <p className="muted">
                  {movie.year} • {movie.duration}
                </p>
                <p className="description">{movie.description}</p>
                <div className="card-actions">
                  <button className="primary">Дивитися</button>
                  <button className="ghost">У добірку</button>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="empty">Не знайдено. Спробуйте інший запит.</div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">
          <div className="brand-mark">Ua</div>
          <span className="brand-name">Cinema</span>
        </div>
        <div className="footer-links">
          <a href="#">Допомога</a>
          <a href="#">Умови</a>
          <a href="#">Конфіденційність</a>
        </div>
        <div className="footer-creators">
          <p className="muted">© 2025 UaCinema. Дивись українське.</p>
          <p className="muted">Створили: Киян Маргарита, Солдатов Андрій.</p>
          <p className="muted">Група ПД-21, Команда "Черешня".</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
