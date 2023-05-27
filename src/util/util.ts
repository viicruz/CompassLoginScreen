// export

import { ProductType } from "../types/types";
export const getCurrentProduct = (id: number, apiData: ProductType[]) => {
  const result = apiData.filter((item) => item.id === id)[0];
  return result;
};
export const getCartItems = (
  cartItemsIndex: number[],
  apiData: ProductType[]
) => {
  let items: ProductType[] = [];
  cartItemsIndex.map((id) => {
    const item = apiData.filter((item) => item.id === id)[0];
    items.push(item);
  });
  return items;
};

export const getAmout = (cartItemsIndex: number[], apiData: ProductType[]) => {
  const curent = getCartItems(cartItemsIndex, apiData);
  const total = curent.reduce((acumulator, curretItem) => {
    return acumulator + curretItem.price;
  }, 0);

  return total;
};
