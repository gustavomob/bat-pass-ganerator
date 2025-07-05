import { TextInput, View } from "react-native";
import { styles } from "./styles";

type InputProps = {
  passwd: string;
  onChange: (text: string) => void;
};

export function Input({ passwd, onChange }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Secret Password"
        value={passwd}
        placeholderTextColor="#645e5e"
        style={styles.input}
        onChangeText={onChange}
      />
    </View>
  );
}
