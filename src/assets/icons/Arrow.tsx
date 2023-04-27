import { View, Text } from "react-native";
import {Svg, Path} from "react-native-svg";

type Props = {
    size:number
};

const Arrow = (props: Props) => {
  return (
    <View style={{
        width:props.size,
        height:props.size
    }}>
      <Svg
        width={props.size}
        height={props.size}
        viewBox="0 0 32 24"
        fill="none"
       
      >
        <Path
          d="M0.939339 10.9393C0.353552 11.5251 0.353552 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM32 10.5L2 10.5V13.5L32 13.5V10.5Z"
          fill="#D78F3C"
        />
      </Svg>
    </View>
  );
};

export default Arrow;
