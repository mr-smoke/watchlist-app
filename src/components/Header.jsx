const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="header-left">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="Spotify Logo"
            className="logo"
          />
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
