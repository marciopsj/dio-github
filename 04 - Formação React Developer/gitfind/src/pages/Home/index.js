import { Header } from "../../components/Header";
import './main.css'
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="main__content">
          <div className="main__search">
            <input className="search__input border" name="user" placeholder="@username" />
            <button className="button border">Buscar</button>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App
