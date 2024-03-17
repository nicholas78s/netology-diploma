import Copyright from './Copyright';
import Nav from './Nav';
import Pay from './Pay';
import Social from './Social';
import siteData from '../config.ts';

const navItems = [
  { label: 'О магазине', link: '/about.html' },
  { label: 'Каталог', link: '/catalog.html' },
  { label: 'Контакты', link: '/contacts.html' },
];

const payItems = [
  { name: 'paypal' },
  { name: 'master-card' },
  { name: 'visa' },
  { name: 'yandex' },
  { name: 'webmoney' },
  { name: 'qiwi' },
];

const socialItems = [{ name: 'twitter' }, { name: 'vk' }];

const Footer = () => {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <section>
            <h5>Информация</h5>
            <Nav items={navItems} className="nav flex-column" />
          </section>
        </div>
        <div className="col">
          <section>
            <h5>Принимаем к оплате:</h5>
            <div className="footer-pay">
              {payItems.map(({ name }) => (
                <Pay key={name} name={name} />
              ))}
            </div>
          </section>
          <section>
            <Copyright />
          </section>
        </div>
        <div className="col text-right">
          <section className="footer-contacts">
            <h5>Контакты:</h5>
            <a className="footer-contacts-phone" href={'tel:' + siteData.phone}>
              {siteData.phone}
            </a>
            <span className="footer-contacts-working-hours">
              Ежедневно: с 09-00 до 21-00
            </span>
            <a
              className="footer-contacts-email"
              href={'mailto:' + siteData.email}
            >
              {siteData.email}
            </a>
            <div className="footer-social-links">
              {socialItems.map(({ name }) => (
                <Social key={name} name={name} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
