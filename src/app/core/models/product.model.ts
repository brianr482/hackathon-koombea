export interface Product {
  id: string;
  name: string;
  city: string;
  price: string;
  photo: string;
  rating: number;
  votes: number;
  fav?: boolean;
}
