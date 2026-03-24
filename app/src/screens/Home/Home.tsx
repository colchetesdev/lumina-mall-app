import { View, Text, Pressable, PressableStateCallbackType   } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/@types/navigation";
import {Store, ChefHat, Clapperboard, Ticket, Map} from "lucide-react";
import {styles} from "./styles"


export default function Home() {
  const route = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <Pressable style ={({pressed}: PressableStateCallbackType)=>[
        styles.btn,
        {backgroundColor: pressed ? "#E3E3E3" : "FFF"}
      ]} onPress={() => route.navigate("Stores")}>
        <Store/>
        <Text style = { styles.btnText}>Stores</Text>
      </Pressable>
      <Pressable style ={({pressed}: PressableStateCallbackType)=>[
        styles.btn,
        {backgroundColor: pressed ? "#E3E3E3" : "FFF"}
      ]} onPress={() => route.navigate("Promo")}>
        <Ticket/>
        <Text style = { styles.btnText}>Promo</Text>
      </Pressable>
      <Pressable style ={({pressed}: PressableStateCallbackType)=>[
        styles.btn,
        {backgroundColor: pressed ? "#E3E3E3" : "FFF"}
      ]} onPress={() => route.navigate("Cine")}>
        <Clapperboard/>
        <Text style = { styles.btnText}>Cine</Text>
      </Pressable>
      <Pressable style ={({pressed}: PressableStateCallbackType)=>[
        styles.btn,
        {backgroundColor: pressed ? "#E3E3E3" : "FFF"}
      ]} onPress={() => route.navigate("Restaurants")}>
        <ChefHat/>
        <Text style = { styles.btnText}>Restaurants</Text>
      </Pressable>
      <Pressable style ={({pressed}: PressableStateCallbackType)=>[
        styles.btn,
        {backgroundColor: pressed ? "#E3E3E3" : "FFF"}
      ]} onPress={() => route.navigate("Map")}>
        <Map/>
        <Text style = { styles.btnText}>Map</Text>
      </Pressable>
    </View>
  );
}
