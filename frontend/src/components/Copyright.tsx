import siteData from '../config.ts';

const Copyright = () => {
  const today = new Date();

  return (
    <div className="footer-copyright">
      2009-{today.getFullYear().toString()} © {siteData.url} — модный
      интернет-магазин обуви и аксессуаров. Все права защищены.
      <br />
      Доставка по всей России!
    </div>
  );
};

export default Copyright;
