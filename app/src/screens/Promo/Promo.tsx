import { View, Text, Pressable, FlatList } from "react-native";
import BackButton from "@/components/BackButton/BackButton";
import { styles } from "./styles";

type PromoItem = {
  id: string;
  title: string;
  description: string;
};

const promos: PromoItem[] = [
  { id: "1", title: "Desconto 50% em Pizza", description: "Somente hoje nas pizzarias participantes." },
  { id: "2", title: "Ingressos 2x1 no Cinema", description: "Promoção válida de segunda a quinta." },
  { id: "3", title: "Frete grátis nas lojas", description: "Em compras acima de R$100." },
];

export default function Promo() {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>🔥 Promoções</Text>

      <FlatList
        data={promos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.promoTitle}>{item.title}</Text>
            <Text style={styles.promoDescription}>{item.description}</Text>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Aproveitar</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
