import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

type Props = {
  size: number;
  color?: string;
};

export default function IconCart(props: Props) {
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
        viewBox="0 0 27 26"
        fill="none"
      >
        <Path
          stroke={props.color || "white"}
          fill={props.color || "#white"}
          d="M19.8941 9.56164L14.5186 0.575343C14.2855 0.191781 13.8927 0 13.5 0C13.1073 0 12.7145 0.191781 12.4814 0.589041L7.10591 9.56164H1.22727C0.552273 9.56164 0 10.1781 0 10.9315C0 11.0548 0.0122727 11.1781 0.0490909 11.3014L3.16636 24C3.44864 25.1507 4.39364 26 5.52273 26H21.4773C22.6064 26 23.5514 25.1507 23.8459 24L26.9632 11.3014L27 10.9315C27 10.1781 26.4477 9.56164 25.7727 9.56164H19.8941ZM9.81818 9.56164L13.5 3.53425L17.1818 9.56164H9.81818ZM13.5 20.5205C12.15 20.5205 11.0455 19.2877 11.0455 17.7808C11.0455 16.274 12.15 15.0411 13.5 15.0411C14.85 15.0411 15.9545 16.274 15.9545 17.7808C15.9545 19.2877 14.85 20.5205 13.5 20.5205Z"
        />
      </Svg>
    </View>
  );
}
