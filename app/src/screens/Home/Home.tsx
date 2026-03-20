import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteStackParamList } from "@/@types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<RouteStackParamList>;

// explicando do porque criei este props: se eu nao nao puxar os props nativos do react navigator
//  e adicionar os meus componentes na tipagem ele fica deixando um "highlight"
//  de erro de tipagem pelo .navigate() ser um tipo que naturalmente nao recebe parâmetro

export default function Home() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View>
      <Text>Tela inicial</Text>
      <TouchableOpacity
        style={{ backgroundColor: "blue" }}
        onPress={() => navigation.navigate("Map")}
      >
        <Text>Ir para mapas</Text>
      </TouchableOpacity>
    </View>
  );
}
