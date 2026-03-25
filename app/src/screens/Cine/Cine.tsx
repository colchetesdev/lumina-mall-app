import { View, Text, Pressable, FlatList } from "react-native";
import BackButton from "@/components/BackButton/BackButton";
import { styles } from "./styles";

type Movie = {
  id: string;
  title: string;
  description: string;
};

const movies: Movie[] = [
  { id: "1", title: "Batman", description: "Um herói sombrio protege Gotham." },
  { id: "2", title: "Inception", description: "Sonhos dentro de sonhos." },
  { id: "3", title: "Interstellar", description: "Uma jornada pelo espaço e tempo." },
];

export default function Cine() {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>🎬 Cinema</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text style={styles.movieDescription}>{item.description}</Text>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Ver detalhes</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
