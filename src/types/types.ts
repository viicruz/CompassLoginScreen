export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
    count: string;
  };
  favorited: boolean;
}

export type productPropType = {
  title: string;
  price: number;
  favorited: boolean;
  image: string;
  id: number;
};
