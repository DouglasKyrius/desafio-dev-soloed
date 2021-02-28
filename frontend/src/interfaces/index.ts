export interface IProducts {
  name: string;
  short_description: string;
  image: string;
  price: number;
  count?: number;
}

export interface ICart {
  name: string;
  short_description: string;
  image: string;
  price: number;
  count: number;
}