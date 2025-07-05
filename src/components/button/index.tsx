import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ButtonProps = {
  name: string;
  onPress: () => void;
};

export function Button({ name, onPress }: ButtonProps) {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
    </>
  );
}
