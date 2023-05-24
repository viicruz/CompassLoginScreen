import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

type Props = {
  size: number;
};

export default function IconFavorite(props: Props) {
  return (
    <View>
      <Svg
        width="29"
        height="27"
        viewBox="0 0 29 27"
        fill="none"
        
      >
        <Path
          d="M28 8.914C28 11.0017 27.1984 13.007 25.7668 14.4904C22.4716 17.9061 19.2755 21.4678 15.8572 24.7596C15.0736 25.5032 13.8307 25.476 13.0809 24.6988L3.23257 14.4904C0.255809 11.4047 0.255809 6.42326 3.23257 3.33762C6.23859 0.221657 11.1357 0.221657 14.1417 3.33762L14.4997 3.70867L14.8575 3.33784C16.2987 1.84308 18.2616 1 20.3122 1C22.3627 1 24.3254 1.84299 25.7668 3.33762C27.1985 4.82111 28 6.82629 28 8.914Z"
          stroke="#F5F5F5"
          stroke-width="1.6"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
