import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

type InputProps = {
  passwd: string;
};

export function Input({ passwd }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Password"
        value={passwd}
        placeholderTextColor="#AAA"
        style={styles.input}
      />
    </View>
  );
}
