import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

type Props = {
  size: number;
  color?: string;
};

export default function IconHome(props: Props) {
  return (
    <View
      style={{
        width: props.size,
        height: props.size,
      }}
    >
      <Svg
        width={props.size}
        height={props.size}
        viewBox="0 0 31 28"
        
      >
        <Path
          d="M16.1 21.5H14.9C14.4029 21.5 14 21.0971 14 20.6V17.9C14 17.4029 14.4029 17 14.9 17H16.1C16.5971 17 17 17.4029 17 17.9V20.6C17 21.0971 16.5971 21.5 16.1 21.5Z"
          stroke={props.color || "white"}
          stroke-width="2.06671"
          stroke-linecap="round"
          stroke-linejoin="round"
          
        />
        <Path
          d="M2 10.25L15.5 2L29 10.25"
          stroke={props.color || "white"}
          stroke-width="2.06671"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M26 15.5V25.1C26 25.5971 25.5971 26 25.1 26H5.9C5.40294 26 5 25.5971 5 25.1V15.5"
          stroke={props.color || "white"}
          stroke-width="2.06671"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
