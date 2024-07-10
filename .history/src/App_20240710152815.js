export default function App() {
  return (
    <div className="app">
      <Header />
      <Matches />
      <Table />
      <Stats />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Tennis Matches</h1>
      <nav>
        <ul className="menu">
          <li>Zápasy</li>
          <li>Tabulka</li>
          <li>Štatistiky</li>
          <li>Galéria</li>
        </ul>
      </nav>
    </div>
  );
}

function Matches() {
  return (
    <div>
      <p>Tu budú zápasy</p>
    </div>
  );
}

function Table() {
  return (
    <div>
      <p>Tu bude tabulka</p>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <p>Tu bude footer</p>
    </footer>
  );
}
