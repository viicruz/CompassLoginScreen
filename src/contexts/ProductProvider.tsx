import { useState, createContext, ReactNode, SetStateAction } from "react";
import { getDatas } from "../services/api";
import { ProductType } from "../types/types";
import { fakeData } from "./teste";

interface ApiProviderProps {
  children: ReactNode;
}

interface ApiContextType {
  updateProduct: (id: number, currentState: boolean) => void;
  getProducts: () => void;
  apiData: ProductType[];
  cartItemsIndex: number[];
  updateCart: (id: number) => void;
}

export const ProductDataContext = createContext<ApiContextType>({
  apiData: [],
  getProducts: async () => {},
  updateProduct: async (id: number, currentState: boolean) => {},
  updateCart: (id: number) => {},
  cartItemsIndex: [],
});
export default function ProductProvider({ children }: ApiProviderProps) {
  const [apiData, setApiData] = useState<ProductType[]>([]);
  const [cartItemsIndex, setCartItemsIndex] = useState<number[]>([1, 3, 4]);

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
        console.log(dad.length);
        setApiData(dad);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCart = (id: number) => {};

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
