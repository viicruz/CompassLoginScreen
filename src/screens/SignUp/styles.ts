import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },

  inputContainer: {
    paddingVertical: 30,
    marginTop: "15%",
    width: "100%",
    minHeight: 230,
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },

  areaTerms: {
    flexDirection: "row",
    gap: 5,
  },

  checkboxWrapper: {
    height: 50,
  },

  CheckBoxContainer: {
    alignSelf: 'flex-start',
    flexDirection: "row",
    gap: 8,
  },
  

  textTerms: {
    color: colors.light,
  },

  textTermsUnderline: {
    color: colors.light,
    textDecorationLine: "underline",
  },

  textError: {
    color: colors.warning,
    marginLeft: 16,
  },
});
