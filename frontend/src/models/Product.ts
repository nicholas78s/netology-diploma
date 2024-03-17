export interface ISize {
  size: string;
  available: boolean;
}

export interface IProduct {
  id: number;
  category?: number;
  title: string;
  price: number;
  images: string[];

  sku?: number;
  manufacturer?: string;
  color?: string;
  material?: string;
  reason?: string;
  season?: string;
  heelSize?: string;
  sizes?: ISize[];
}
