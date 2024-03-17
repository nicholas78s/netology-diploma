import siteData from '../config.ts';

const Contacts = () => {
  return (
    <section className="top-sales">
      <h2 className="text-center">Контакты</h2>
      <p>
        Наш головной офис расположен в г.Москва, по адресу: {siteData.address}.
      </p>
      <h5 className="text-center">Координаты для связи:</h5>
      <p>
        Телефон: <a href={'tel:' + siteData.phone}>{siteData.phone}</a>{' '}
        (ежедневно: с 09-00 до 21-00)
      </p>
      <p>
        Email: <a href={'mailto:' + siteData.email}>{siteData.email}</a>
      </p>
    </section>
  );
};

export default Contacts;
