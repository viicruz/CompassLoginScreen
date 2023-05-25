import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ProductDataContext } from "../../contexts/ProductProvider";
import { ProductType } from "../../types/types";
import { colors } from "../../constants/theme";
import ButtonBuyAdd from "../../components/ButtonBuyAdd";
import { IconMinus, IconPlus, IconFullStar, IconHalfStar } from "../../assets/icons";
import { styles } from "./styles";

export default function ProductDetailScreen({ route }: any) {

    const { apiData } = useContext(ProductDataContext);
    const [currentData, setCurrentData] = useState<ProductType>();
    const [quantity, setQuantity] = useState<number>(1);
    useEffect(() => {
        const param = route.params;
        console.log(param.id);
        const id: number = param.id;
        const result = apiData.filter((item) => item.id === id);
        setCurrentData(result[0]);
    }, []);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const sizeHeart = 53
    const colorHeart = colors.background
    const favorited = true
    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <View style={styles.headerCard}>
                        <Text style={styles.textHeaderCard}>JPR Fone de Ouvido Tune 510BT Bluetooth 5.0</Text>
                        <Ionicons
                            name={currentData?.favorited ? 'heart' : 'heart-outline'}
                            size={sizeHeart}
                            color={colorHeart}
                        />
                    </View>
                    <View>
                        <Image style={styles.image} source={{ uri: currentData?.image }} />
                    </View>

                    <View style={styles.starArea}>
                        <IconFullStar size={30} />
                        <IconFullStar size={30} />
                        <IconFullStar size={30} />
                        <IconFullStar size={30} />
                        <IconHalfStar size={30} />
                    </View>
                    <View style={styles.containerPrice}>
                        <Text style={styles.price}>{`R$ ${currentData?.price}`}</Text>
                        <View style={styles.areaQuantity}>
                            <Pressable style={styles.circle} onPress={decreaseQuantity}>
                                <IconMinus size={25} />
                            </Pressable>
                            <Text style={styles.innerCircle}>{quantity}</Text>
                            <Pressable style={styles.circle} onPress={addQuantity}>
                                <IconPlus size={25} />
                            </Pressable>
                        </View>
                    </View>

                    <Text style={styles.description}>{currentData?.description}</Text>

                    <ButtonBuyAdd label="add to cart" onPress={() => { }} />
                </View>
            </ScrollView>
        </View>
    )
}
