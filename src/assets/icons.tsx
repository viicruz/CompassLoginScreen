import { View } from "react-native";
import { Svg, Path } from "react-native-svg";
import { colors } from "../constants/theme";
import { Props } from "../types/types";

const colorDefault = colors.primary

export const IconFullStar = (props: Props) => {
    return (
        <Svg
            width={props.size || 30}
            height={props.size || 30}
            viewBox="0 0 30 30"
            fill="none"

        >
            <Path
                d="M15 21.5875L22.725 26.25L20.675 17.4625L27.5 11.55L18.5125 10.7875L15 2.5L11.4875 10.7875L2.5 11.55L9.325 17.4625L7.275 26.25L15 21.5875Z"
                fill={props.color || colorDefault}
            />
        </Svg>
    );
};
export const IconHalfStar = (props: Props) => {
    return (
        <Svg
            width={props.size || 30}
            height={props.size || 30}
            viewBox="0 0 30 30"
            fill="none"

        >
            <Path
                d="M27.5 11.55L18.5125 10.775L15 2.5L11.4875 10.7875L2.5 11.55L9.325 17.4625L7.275 26.25L15 21.5875L22.725 26.25L20.6875 17.4625L27.5 11.55ZM15 19.25V7.625L17.1375 12.675L22.6125 13.15L18.4625 16.75L19.7125 22.1L15 19.25Z"
                fill={props.color || colorDefault}

            />
        </Svg>
    );
};
export const IconHeart = (props: Props) => {
    const width = 30
    const height = 28
    const newWidth = props.size || height
    const newHeight = (height * newWidth) / width
    return (
        <Svg
            width={newWidth}
            height={newHeight}
            viewBox="0 0 30 28"
            fill="none"

        >
            <Path
                d="M29 9.20711C29 11.3722 28.1687 13.4517 26.6841 14.9901C23.2669 18.5322 19.9524 22.2258 16.4074 25.6396C15.5949 26.4107 14.3059 26.3826 13.5283 25.5766L3.31526 14.9901C0.228246 11.7901 0.228246 6.62412 3.31526 3.4242C6.43261 0.19283 11.5111 0.19283 14.6284 3.4242L14.9997 3.80899L15.3707 3.42442C16.8654 1.8743 18.901 1 21.0274 1C23.1539 1 25.1893 1.87422 26.6841 3.4242C28.1688 4.96263 29 7.04208 29 9.20711Z"
                stroke={props.color || 'white'}
                stroke-width="2"
                stroke-linejoin="round"

            />
        </Svg>
    );
};
export const IconFullHeart = (props: Props) => {
    const width = 30
    const height = 28
    const newWidth = props.size || height
    const newHeight = (height * newWidth) / width
    return (
        <Svg
            width={newWidth}
            height={newHeight}
            viewBox="0 0 30 28"
            fill="none"

        >
            <Path
                d="M29 9.20711C29 11.3722 28.1687 13.4517 26.6841 14.9901C23.2669 18.5322 19.9524 22.2258 16.4074 25.6396C15.5949 26.4107 14.3059 26.3826 13.5283 25.5766L3.31526 14.9901C0.228246 11.7901 0.228246 6.62412 3.31526 3.4242C6.43261 0.19283 11.5111 0.19283 14.6284 3.4242L14.9997 3.80899L15.3707 3.42442C16.8654 1.8743 18.901 1 21.0274 1C23.1539 1 25.1893 1.87422 26.6841 3.4242C28.1688 4.96263 29 7.04208 29 9.20711Z"
                stroke-width="2"
                stroke-linejoin="round"
                fill={props.color || 'white'}

            />
        </Svg>
    );
};
export const IconArrow = (props: Props) => {
    const width = 32
    const height = 24
    const newWidth = props.size || height
    const newHeight = (height * newWidth) / width

    return (
        <Svg
            width={newWidth}
            height={newHeight}
            viewBox="0 0 32 24"
            fill="none"

        >
            <Path
                d="M0.939339 10.9393C0.353552 11.5251 0.353552 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM32 10.5L2 10.5V13.5L32 13.5V10.5Z"
                fill={props.color || colorDefault}

            />
        </Svg>
    );
};
export const IconHome = (props: Props) => {
    const width = 31
    const height = 28
    const newWidth = props.size || height
    const newHeight = (height * newWidth) / width
    return (
        <Svg
            width={newWidth}
            height={newHeight}
            viewBox="0 0 31 28"

        >
            <Path
                d="M16.1 21.5H14.9C14.4029 21.5 14 21.0971 14 20.6V17.9C14 17.4029 14.4029 17 14.9 17H16.1C16.5971 17 17 17.4029 17 17.9V20.6C17 21.0971 16.5971 21.5 16.1 21.5Z"
                stroke={props.color || colorDefault}
                stroke-width="2.06671"
                stroke-linecap="round"
                stroke-linejoin="round"

            />
            <Path
                d="M2 10.25L15.5 2L29 10.25"
                stroke={props.color || colorDefault}
                stroke-width="2.06671"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M26 15.5V25.1C26 25.5971 25.5971 26 25.1 26H5.9C5.40294 26 5 25.5971 5 25.1V15.5"
                stroke={props.color || colorDefault}
                stroke-width="2.06671"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
export const IconMail = (props: Props) => {
    const width = 27
    const height = 20
    const newWidth = props.size || height
    const newHeight = (height * newWidth) / width
    return (
        <View>
            <Svg
                width={newWidth}
                height={newHeight}
                viewBox="0 0 27 20"
                fill="none"
            >
                <Path
                    d="M7.25012 6L13.5001 10.375L19.7501 6"
                    stroke={props.color || colorDefault}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M1 16V3.5C1 2.11929 2.11929 1 3.5 1H23.5C24.8807 1 26 2.11929 26 3.5V16C26 17.3807 24.8807 18.5 23.5 18.5H3.5C2.11929 18.5 1 17.3807 1 16Z"
                    stroke={props.color || colorDefault}
                    stroke-width="2"
                />
            </Svg>
        </View>
    );
};
export const IconLock = (props: Props) => {
    const width = 20
    const height = 26
    const newWidth = props.size || height
    const newHeight = (height * newWidth) / width
    return (
        <Svg
            width={newWidth}
            height={newHeight}
            viewBox="0 0 20 26"
            fill="none"
        >
            <Path
                d="M16 13H18.1C18.5971 13 19 13.4029 19 13.9V24.1C19 24.5971 18.5971 25 18.1 25H1.9C1.40294 25 1 24.5971 1 24.1V13.9C1 13.4029 1.40294 13 1.9 13H4M16 13V7C16 5 14.8 1 10 1C5.2 1 4 5 4 7V13M16 13H4"
                stroke={props.color || colorDefault}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>

    );
};
export const IconMinus = (props: Props) => {
    const width = 17
    const height = 6
    const newWidth = props.size || height
    const newHeight = (height * newWidth) / width
    return (
        <Svg
            width={newWidth}
            height={newHeight}
            viewBox="0 0 17 6"
            fill="none"
        >
            <Path
                d="M16.0398 0.920454V6H0.323864V0.920454H16.0398Z"
                fill={props.color || colors.primary}
            />
        </Svg>
    );
};
export const IconPlus = (props: Props) => {
    return (
        <Svg
            width={props.size || 24}
            height={props.size || 24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M9.46591 23.9375V0.346589H14.8182V23.9375H9.46591ZM0.346591 14.8182V9.46591H23.9375V14.8182H0.346591Z"
                fill={props.color || colors.primary}
            />
        </Svg>
    );
};
export const IconShop = (props: Props) => {
    const width = 27
    const height = 26
    const newWidth = props.size || height
    const newHeight = (height * newWidth) / width
    return (
        <Svg
            width={newWidth}
            height={newHeight}
            viewBox="0 0 27 26"
            fill="none"
        >
            <Path
                d="M19.8941 9.56164L14.5186 0.575343C14.2855 0.191781 13.8927 0 13.5 0C13.1073 0 12.7145 0.191781 12.4814 0.589041L7.10591 9.56164H1.22727C0.552273 9.56164 0 10.1781 0 10.9315C0 11.0548 0.0122727 11.1781 0.0490909 11.3014L3.16636 24C3.44864 25.1507 4.39364 26 5.52273 26H21.4773C22.6064 26 23.5514 25.1507 23.8459 24L26.9632 11.3014L27 10.9315C27 10.1781 26.4477 9.56164 25.7727 9.56164H19.8941ZM9.81818 9.56164L13.5 3.53425L17.1818 9.56164H9.81818ZM13.5 20.5205C12.15 20.5205 11.0455 19.2877 11.0455 17.7808C11.0455 16.274 12.15 15.0411 13.5 15.0411C14.85 15.0411 15.9545 16.274 15.9545 17.7808C15.9545 19.2877 14.85 20.5205 13.5 20.5205Z"
                fill={props.color || colorDefault}
            />
        </Svg>
    );
};
export const IconCart = (props: Props) => {
    return (
        <Svg
            width={props.size || 31}
            height={props.size || 31}
            viewBox="0 0 31 31"
            fill="none"
        >
            <Path
                d="M25.7681 29.3064C26.9405 29.3064 27.891 28.3559 27.891 27.1834C27.891 26.011 26.9405 25.0604 25.7681 25.0604C24.5956 25.0604 23.6451 26.011 23.6451 27.1834C23.6451 28.3559 24.5956 29.3064 25.7681 29.3064Z"
                stroke={props.color || colorDefault}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M11.6149 29.3064C12.7873 29.3064 13.7379 28.3559 13.7379 27.1834C13.7379 26.011 12.7873 25.0604 11.6149 25.0604C10.4424 25.0604 9.4919 26.011 9.4919 27.1834C9.4919 28.3559 10.4424 29.3064 11.6149 29.3064Z"
                stroke={props.color || colorDefault}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M5.24595 3.83064H29.3064L26.4757 19.3991H8.07659L5.24595 3.83064ZM5.24595 3.83064C5.01006 2.88709 3.83064 1 1 1"
                stroke={props.color || colorDefault}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M26.4757 19.3992H8.07656H5.57253C3.04717 19.3992 1.70763 20.5048 1.70763 22.2298C1.70763 23.9548 3.04717 25.0604 5.57253 25.0604H25.768"
                stroke={props.color || colorDefault}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
export const IconUser = (props: Props) => {
    const width = 20
    const height = 22
    const newWidth = props.size || height
    const newHeight = (height * newWidth) / width
    return (
        <Svg
            width={newWidth}
            height={newHeight}
            viewBox="0 0 20 22"
            fill="none"
        >
            <Path
                d="M1 21V19.75C1 14.9175 4.91751 11 9.75 11C14.5825 11 18.5 14.9175 18.5 19.75V21"
                stroke={props.color || colorDefault}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M9.75 11C12.5114 11 14.75 8.76138 14.75 6C14.75 3.23857 12.5114 1 9.75 1C6.98857 1 4.75 3.23857 4.75 6C4.75 8.76138 6.98857 11 9.75 11Z"
                stroke={props.color || colorDefault}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
