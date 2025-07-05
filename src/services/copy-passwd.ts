import * as Clipboard from "expo-clipboard";
import { Alert } from "react-native";

export async function copyToClipboard(value: string) {
  if (!value) {
    Alert.alert("Nada para copiar", "O campo de senha está vazio.");
    return;
  }

  await Clipboard.setStringAsync(value);
  Alert.alert("Copiado", "Senha copiada para a área de transferência!");
}
