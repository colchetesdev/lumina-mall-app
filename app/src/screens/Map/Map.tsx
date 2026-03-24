import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "@/components/BackButton/BackButton";

export default function Map() {
  const navigation = useNavigation();
  return (
    <View>
      <BackButton/>
      <Text>Tela de mapas</Text>
    </View>
  );
}
