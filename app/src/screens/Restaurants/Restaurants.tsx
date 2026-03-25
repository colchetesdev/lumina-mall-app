import { View, Text, Pressable, FlatList } from "react-native";
import BackButton from "@/components/BackButton/BackButton";
import { styles } from "./styles";

type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
};

const restaurants: Restaurant[] = [
  { id: "1", name: "Pizzaria Napoli", cuisine: "Italiana" },
  { id: "2", name: "Sushi House", cuisine: "Japonesa" },
  { id: "3", name: "Churrascaria Boi na Brasa", cuisine: "Brasileira" },
];

export default function Restaurants() {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>🍽️ Restaurantes</Text>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.restaurantName}>{item.name}</Text>
            <Text style={styles.restaurantCuisine}>{item.cuisine}</Text>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Ver detalhes</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
