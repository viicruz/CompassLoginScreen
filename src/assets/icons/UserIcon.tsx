import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

type Props = {
  size: number
};

export default function UserIcon(props: Props) {
  return (
    <View style={{
      width:props.size,
      height:props.size
    }}>
      <Svg width={props.size} height={props.size} viewBox="0 0 79 89" fill="none">
        <Path
          d="M1 87.898V82.4668C1 61.4701 18.0212 44.449 39.0179 44.449C60.0146 44.449 77.0357 61.4701 77.0357 82.4668V87.898"
          stroke="#D78F3C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M39.0178 44.449C51.0157 44.449 60.7423 34.7224 60.7423 22.7245C60.7423 10.7264 51.0157 1 39.0178 1C27.0197 1 17.2933 10.7264 17.2933 22.7245C17.2933 34.7224 27.0197 44.449 39.0178 44.449Z"
          stroke="#D78F3C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}

