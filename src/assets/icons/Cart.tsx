import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

type Props = {
  size: number;
};

export default function IconCart(props: Props) {
  return (
    <View  style={{
        width: props.size,
        height: props.size,
      }}>
      <Svg
        width={props.size} 
        height={props.size}
        viewBox="0 0 31 31"
        fill="none"
        
      >
        <Path
          d="M25.7681 29.3064C26.9405 29.3064 27.891 28.3559 27.891 27.1834C27.891 26.011 26.9405 25.0604 25.7681 25.0604C24.5956 25.0604 23.6451 26.011 23.6451 27.1834C23.6451 28.3559 24.5956 29.3064 25.7681 29.3064Z"
          fill="black"
          stroke="#D78F3C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.6149 29.3064C12.7873 29.3064 13.7379 28.3559 13.7379 27.1834C13.7379 26.011 12.7873 25.0604 11.6149 25.0604C10.4424 25.0604 9.4919 26.011 9.4919 27.1834C9.4919 28.3559 10.4424 29.3064 11.6149 29.3064Z"
          fill="black"
          stroke="#D78F3C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5.24595 3.83064H29.3064L26.4757 19.3991H8.07659L5.24595 3.83064ZM5.24595 3.83064C5.01006 2.88709 3.83064 1 1 1"
          stroke="#D78F3C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M26.4757 19.3992H8.07656H5.57253C3.04717 19.3992 1.70763 20.5048 1.70763 22.2298C1.70763 23.9548 3.04717 25.0604 5.57253 25.0604H25.768"
          stroke="#D78F3C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      
    </View>
  );
}
