import { useState, createContext, ReactNode, SetStateAction } from "react";
import { getDatas } from "../services/api";
import { ProductType } from "../types/types";
import { ApiProviderProps, ApiContextType } from "../types/types";

export const ProductDataContext = createContext<ApiContextType>({
  apiData: [],
  getProducts: async () => {},
  updateProduct: async (id: number, currentState: boolean) => {},
  updateCart: async (id: number[]) => {},
  cartItemsIndex: [],
});
export default function ProductProvider({ children }: ApiProviderProps) {
  const [apiData, setApiData] = useState<ProductType[]>([]);
  const [cartItemsIndex, setCartItemsIndex] = useState<number[]>([]);

  const updateProduct = (id: number, currentState: boolean) => {
    setApiData((prevList) =>
      apiData.map((item) =>
        item.id === id ? { ...item, favorited: !currentState } : item
      )
    );
  };

  // This function fetch datas from api
  const getProducts = () => {
    getDatas()
      .then((dados: any) => {
        const dad: SetStateAction<ProductType[]> = dados?.data;
        setApiData(dad);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCart = (id: number[]) => {
    const prev = cartItemsIndex.concat(id);
    setCartItemsIndex(prev);
  };

  const values = {
    updateProduct,
    apiData,
    getProducts,
    cartItemsIndex,
    updateCart,
  };
  return (
    <ProductDataContext.Provider value={values}>
      {children}
    </ProductDataContext.Provider>
  );
}
