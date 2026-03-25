import { View, Text, Pressable, PressableStateCallbackType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Store, ChefHat, Clapperboard, Ticket, Map } from "lucide-react";
import { styles } from "./styles";

export default function Home() {
  const route = useNavigation();

  const buttons = [
    { label: "Stores", icon: Store, screen: "Stores" },
    { label: "Promo", icon: Ticket, screen: "Promo" },
    { label: "Cine", icon: Clapperboard, screen: "Cine" },
    { label: "Restaurants", icon: ChefHat, screen: "Restaurants" },
    { label: "Map", icon: Map, screen: "Map" },
  ];

  return (
    <View style={styles.container}>
      {buttons.map(({ label, icon: Icon, screen }) => (
        <Pressable
          style={({ pressed }: PressableStateCallbackType) => [
            styles.btn,
            { backgroundColor: pressed ? "#E3E3E3" : "#FFF" },
          ]}
          onPress={() => route.navigate(screen as never)} // corrige o undefined do navigate()
        >
          <Icon />
          <Text style={styles.btnText}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
