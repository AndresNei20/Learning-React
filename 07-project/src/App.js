import Add from "./components/Add";
import List from "./components/List";
import Search from "./components/Search";

/* We just use 3 components (Add, List, Search) because those were the only ones that uses javascript funcion and are not static */

function App() {
  return (
    
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MyMovies</h1>
        </header>

        <nav className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Movies</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>

        <section className="content">
          {/**list of movies */}
          <List></List>       
        </section>

        <aside className="side">
            {/**side bar, search bar */}
            <Search></Search>

            <Add></Add>
        </aside>

        <footer className="footer">
            &copy; Master with JS ES12 and TS - <a href="https://www.youtube.com/">Youtube.com</a>
        </footer>
    </div>

  );
}

export default App;
