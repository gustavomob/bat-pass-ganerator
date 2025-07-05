import { Image, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import logo from "@/assets/bat-logo.png";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useState } from "react";

export function Home() {
  const [passwd, setPasswd] = useState("");

  function handleGenerate() {}
  function handleCopy() {}

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image source={logo} style={styles.logo} />
      </View>
      <View>
        <Input passwd={passwd} />
      </View>
      <Button name="Gerar Senha" onPress={handleGenerate} />
      <Button name="Copiar Senha" onPress={handleCopy} />
    </View>
  );
}
