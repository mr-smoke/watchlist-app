const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="header-left">
          <div className="logo">
            <img src="/logo.png" alt="Spotify Logo" className="logo" />
            <h1>Watcher</h1>
          </div>
          <a href="/">Home</a>
        </div>
        <div className="header-right">
          <a href="/watched">Watched</a>
          <a href="/watchlist">Watch List</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
