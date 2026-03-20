import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Map() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Tela de mapas</Text>
    </View>
  );
}
