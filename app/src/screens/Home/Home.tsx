import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RoutesParamList } from "@/@types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<RoutesParamList>;

// explicando do porque criei este props: se eu nao nao puxar os props nativos do react navigator
//  e adicionar os meus componentes na tipagem ele fica deixando um "highlight"
//  de erro de tipagem pelo .navigate() ser um tipo que naturalmente nao recebe parâmetro

export default function Home() {
  const route = useNavigation<NavigationProps>();
  return (
    <View>
      <Text>Tela inicial</Text>
      <Pressable onPress={() => route.navigate("Stores")}>
        <Text>Stores</Text>
      </Pressable>
    </View>
  );
}
