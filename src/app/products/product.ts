export interface IProduct {
  id: number;
  brandName: string;
  quantity?: number;
  name: string;
  code: string;
  releaseDate?: string;
  description: string;
  price: number;
  discount?: number;
  finalPrice?: number;
  starRating?: number;
  imgUrl: string;
}