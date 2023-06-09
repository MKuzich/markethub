export interface ICategory {
  _id: string;
  name: string;
  tag: string;
  desription: string;
  image: string;
  products: string[];
}

export interface ICategoryCreate {
  name: string;
  tag: string;
  desription: string;
  image: string;
}
