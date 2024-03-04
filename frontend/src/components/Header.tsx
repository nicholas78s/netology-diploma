import Logo from "./Logo";
import Nav from "./Nav";
import CartLogo from "./CartLogo";
import SearchForm from "./SearchForm";

const navItems = [
  {label: 'Главная', link: '/'},
  {label: 'Каталог', link: '/catalog.html'},
  {label: 'О магазине', link: '/about.html'},
  {label: 'Контакты', link: '/contacts.html'}
];

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo />
            <div className="collapse navbar-collapse" id="navbarMain">
              <Nav items={navItems} className="navbar-nav mr-auto" />
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                  <CartLogo />
                </div>
                <SearchForm />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;