function Navbar({ query, setQuery, handleSearch }) {
  return (
    <nav className="navbar">
      <h1>🎬 Movie Explorer</h1>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;