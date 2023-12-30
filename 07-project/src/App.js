

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
            <article className="movie-item">
                <h3 className="title"> Web development</h3>
                <p className="description">andresnei.co</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
            <article className="movie-item">
                <h3 className="title"> Web development</h3>
                <p className="description">andresnei.co</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
            <article className="movie-item">
                <h3 className="title"> Web development</h3>
                <p className="description">andresnei.co</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
            <article className="movie-item">
                <h3 className="title"> Web development</h3>
                <p className="description">andresnei.co</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
            <article className="movie-item">
                <h3 className="title"> Web development</h3>
                <p className="description">andresnei.co</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
            <article className="movie-item">
                <h3 className="title"> Web development</h3>
                <p className="description">andresnei.co</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
        </section>

        <aside className="side">
            <div className="search">
                <h3 className="title">Search</h3>
                <form action="">
                    <input type="text"/>
                    <button>Search</button>
                </form>
            </div>

            <div className="add">
                <h3 className="title">Add movie</h3>
                <form action="">
                    <input type="text" aria-placeholder="Title"/>
                    <textarea placeholder="Description"></textarea>
                    <input type="submit"/>
                </form>
            </div>
        </aside>

        <footer className="footer">
            &copy; Master with JS ES12 and TS - <a href="https://www.youtube.com/">Youtube.com</a>
        </footer>
    </div>

  );
}

export default App;
