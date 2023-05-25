// export

import { ProductType } from "../types/types";
export const getCurrentProduct = async (id: number, apiData: ProductType[]) => {
  const result = apiData.filter((item) => item.id === id)[0];
  return result;
};
