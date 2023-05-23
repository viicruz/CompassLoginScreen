import { useState, createContext, ReactNode, SetStateAction } from "react";
import { getDatas } from "../services/api";
import { ProductType, produtcPropType } from "../types/types";
import { fakeData } from "./teste";

interface ApiProviderProps {
  children: ReactNode;
}

interface ApiContextType {
  updateProduct: (id: number, currentState: boolean) => void;
  getProducts: () => void;
  apiData: ProductType[];
}

export const ProductDataContext = createContext<ApiContextType>({
  apiData: [],
  getProducts: async () => {},
  updateProduct: async () => {},
});
export default function ProductProvider({ children }: ApiProviderProps) {
  const [apiData, setApiData] = useState<ProductType[]>(fakeData);

  const updateProduct = (id: number, currentState: boolean) => {
    setApiData((prevList) =>
      apiData.map((item) =>
        item.id === id ? { ...item, favorited: !currentState } : item
      )
    );
  };
  const getProducts = () => {};

  const values = { updateProduct, apiData, getProducts };
  return (
    <ProductDataContext.Provider value={values}>
      {children}
    </ProductDataContext.Provider>
  );
}
