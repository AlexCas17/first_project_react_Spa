import "./App.css";

function Header() {
  return <h1>Alex Spa</h1>;
}

function NavBar() {
  return (
    <nav>
      <ul>
        <li>Services</li>
        <li>Calender</li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
