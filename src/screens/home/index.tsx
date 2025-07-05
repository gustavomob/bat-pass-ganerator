import { Alert, Image, Text, View } from "react-native";
import { styles } from "./styles";
import logo from "@/assets/bat-logo.png";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useState } from "react";
import { copyToClipboard } from "@/services/copy-passwd";
import { generatePassword } from "@/services/passwd-generate";

export function Home() {
  const [passwd, setPasswd] = useState("");

  function handleGenerate() {
    const newPassword = generatePassword();
    setPasswd(newPassword);
  }

  async function handleCopy() {
    await copyToClipboard(passwd);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image source={logo} style={styles.logo} />
      </View>
      <View>
        <Input passwd={passwd} onChange={setPasswd} />
      </View>
      <Button name="Gerar Senha" onPress={handleGenerate} />
      <Button name="Copiar Senha" onPress={handleCopy} />
    </View>
  );
}
