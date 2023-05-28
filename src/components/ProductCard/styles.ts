import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  wrap: {
    width: 186,
    height: 226,
    borderRadius: 10,
    backgroundColor: colors.cardProduct,
    marginHorizontal: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },

  itemTitle: {
    color: colors.background,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },

  itemImage: {
    height: 122,
    width: 122,
    marginVertical: 5,
  },

  itemPriceWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },

  itemPrice: {
    marginVertical: 5,
    width: 109,
    height: 30,
    justifyContent: "center",
    paddingVertical: 3,
    backgroundColor: colors.cardPrice,
    borderRadius: 8,
    padding: 5,
  },

  itemPriceText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
