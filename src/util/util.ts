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

export const getAmount = (cartItemsIndex: number[], apiData: ProductType[]) => {
  const current = getCartItems(cartItemsIndex, apiData);
  const total = current.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  return total;
};
