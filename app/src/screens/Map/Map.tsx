import { View, Text } from "react-native";
import BackButton from "@/components/BackButton/BackButton";
import { styles } from "./styles";

export default function Map() {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>🗺️ Tela de Mapas</Text>
      <Text style={styles.text}>Aqui você poderá visualizar locais próximos.</Text>
      <Text style={styles.text}>Funcionalidades futuras: mapa interativo, rotas e pontos de interesse.</Text>
    </View>
  );
}
