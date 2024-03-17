interface IConfig {
  baseUrl: string;
  productsPageSize: number;
  phone: string;
  email: string;
  address: string;
  url: string;
}

export default Object.freeze<IConfig>({
  baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:7070/api/',
  productsPageSize: 6,
  phone: '+7-495-790-35-03',
  email: 'office@bosanoga.ru',
  address: 'Варшавское шоссе, д. 17, бизнес-центр W Plaza',
  url: 'BosaNoga.ru',
});
