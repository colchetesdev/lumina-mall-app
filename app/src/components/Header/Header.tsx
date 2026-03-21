import { styles } from "./styles";
import { View, Text, Image } from "react-native";
import {
  Store,
  House,
  Map,
  Clapperboard,
  Ticket,
  ChefHat,
  LucideIcon,
} from "lucide-react";

type HeaderProps = {
  title: string;
};

const routeIcons: Record<string, LucideIcon> = {
  Home: House,
  Stores: Store,
  Map: Map,
  Cine: Clapperboard,
  Promo: Ticket,
  Restaurants: ChefHat,
};

export default function Header(props: HeaderProps) {
  const Icon: LucideIcon = routeIcons[props.title];
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("^/logo.png")} />
      <View style={styles.routeContainer}>
        {Icon && <Icon style={styles.icon} />}
        <Text style={styles.routeName}>{props.title}</Text>
      </View>
    </View>
  );
}
