
import { ReactNode,  Dispatch, SetStateAction } from 'react';
import { type GestureResponderEvent } from 'react-native';
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export interface PropTab extends BottomTabBarProps {}

export type Props = {
  title?: string;
  
} & {
  color?: string;
  size?: number;
  text?: string;
  label?: string
  onPress?: () => void;
  width?: number;
  height?: number;
  isLoading?: boolean;
  disable?: boolean;
  

}

export type PropsInput = {
  icon: "User" | "Mail" | "Lock";
  secureTextEntry?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  isWrong: boolean;
  wrongText: string;
};

export type PropsFooter = {
  buttonName: string;
  goTo: string;
  textName: string;
};

export type PropsButton = {
  onPress: (event: GestureResponderEvent) => void;
  name: string;
  isLoading?: boolean;
};



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
  detail?: string;
}

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  Profile: { userId: string };
};

export type UserCredential = {
  email: string;
  password: string;
} & {

  username?: string;

}

export interface ApiProviderProps {
  children: ReactNode;
}

export type fetchLoaderProps = {
  isLoading: boolean;
  setIsloading: Dispatch<SetStateAction<boolean>>;
};
 
export interface ApiContextType {
  updateProduct: (id: number, currentState: boolean) => void;
  getProducts: () => void;
  apiData: ProductType[];
  cartItemsIndex: number[];
  updateCart: (id: number[]) => void;
}

export type ModalProps = {
  visible: boolean
  onClose: () => void;
  title: string;
  text: string;
  button?: string
}

