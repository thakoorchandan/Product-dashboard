import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data.map((category: any) => category.slug);
};

export const getProductsByCategory = async (category: string) => {
  const response = await axios.get(`${BASE_URL}/category/${category}`);
  return response.data;
};
