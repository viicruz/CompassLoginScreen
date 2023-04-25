import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

type Props = {
  size: number;
  
};

export default function IconLock(props: Props) {
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
        viewBox="0 0 79 104"
        fill="none"
      >
        <Path
          d="M64.3631 51.6905H73.2339C75.3338 51.6905 77.0357 53.3924 77.0357 55.4923V98.5792C77.0357 100.679 75.3338 102.381 73.2339 102.381H4.80179C2.70212 102.381 1 100.679 1 98.5792V55.4923C1 53.3924 2.70212 51.6905 4.80179 51.6905H13.6726M64.3631 51.6905V26.3452C64.3631 17.8968 59.2941 1 39.0179 1C18.7417 1 13.6726 17.8968 13.6726 26.3452V51.6905M64.3631 51.6905H13.6726"
          stroke="#D78F3C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
