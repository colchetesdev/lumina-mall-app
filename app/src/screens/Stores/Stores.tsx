import { View, Text, Pressable, FlatList } from "react-native";
import BackButton from "@/components/BackButton/BackButton";
import { styles } from "./styles";

type Store = {
  id: string;
  name: string;
  category: string;
};

const stores: Store[] = [
  { id: "1", name: "Loja de Roupas Fashion", category: "Moda" },
  { id: "2", name: "Tech Store", category: "Eletrônicos" },
  { id: "3", name: "Book World", category: "Livros" },
];

export default function Stores() {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>🏬 Lojas</Text>

      <FlatList
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.storeName}>{item.name}</Text>
            <Text style={styles.storeCategory}>{item.category}</Text>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Ver detalhes</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
