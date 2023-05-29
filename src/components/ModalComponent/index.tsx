import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ModalProps } from "../../types/types";

const ModalComponent = ({
  visible,
  onClose,
  title,
  text,
  button = "Ok",
  onConfirm = () => {},
}: ModalProps) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{title}</Text>
        <Text style={styles.modalText}>{text}</Text>

        <TouchableOpacity style={styles.closeButton} onPress={()=>{
            onClose();
            onConfirm();
        }}>
          <Text style={styles.closeButtonText}>{button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalComponent;
