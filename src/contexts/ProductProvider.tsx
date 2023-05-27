import { useState, createContext, ReactNode, SetStateAction } from "react";
import { getDatas } from "../services/api";
import { ProductType } from "../types/types";
import { getAmout, getCartItems, getCurrentProduct } from "../util/util";

interface ApiProviderProps {
  children: ReactNode;
}

interface ApiContextType {
  updateProduct: (id: number, currentState: boolean) => void;
  getProducts: () => void;
  apiData: ProductType[];
  cartItemsIndex: number[];
  updateCart: (id: number[]) => void;
  removeCartItem: (id: number) => void;
  totalAmount: number;
  updateAmount: (amount: number) => void;
}

export const ProductDataContext = createContext<ApiContextType>({
  apiData: [],
  getProducts: async () => {},
  updateProduct: async (id: number, currentState: boolean) => {},
  updateCart: async (id: number[]) => {},
  cartItemsIndex: [],
  removeCartItem: () => {},
  totalAmount: 0,
  updateAmount: () => {},
});
export default function ProductProvider({ children }: ApiProviderProps) {
  const [apiData, setApiData] = useState<ProductType[]>([]);
  const [cartItemsIndex, setCartItemsIndex] = useState<number[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

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

  const updateAmount = (amount: number) => {
    setTotalAmount(amount);
  };

  const removeCartItem = (index: number) => {
    setCartItemsIndex((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const values = {
    updateProduct,
    apiData,
    getProducts,
    cartItemsIndex,
    updateCart,
    removeCartItem,
    totalAmount,
    updateAmount,
  };
  return (
    <ProductDataContext.Provider value={values}>
      {children}
    </ProductDataContext.Provider>
  );
}
