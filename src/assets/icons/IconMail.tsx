import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

type Props = {
  size: number;
};

export default function IconMail(props: Props) {
  return (
    <View style={{
        width:props.size,
        height:props.size
    }}>
      <Svg width={props.size} height={props.size} viewBox="0 0 79 56" fill="none">
        <Path
          d="M20.0089 16.2072L39.0178 29.5134L58.0268 16.2072"
          stroke="#D78F3C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M1 46.6214V8.60357C1 4.40423 4.40423 1 8.60357 1H69.4322C73.6316 1 77.0357 4.40423 77.0357 8.60357V46.6214C77.0357 50.8209 73.6316 54.225 69.4322 54.225H8.60357C4.40423 54.225 1 50.8209 1 46.6214Z"
          stroke="#D78F3C"
          stroke-width="2"
        />
      </Svg>
    </View>
  );
}
