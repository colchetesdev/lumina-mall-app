import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home/Home";
import Cine from "@/screens/Cine/Cine";
import Map from "@/screens/Map/Map";
import Promo from "@/screens/Promo/Promo";
import Stores from "@/screens/Stores/Stores";
import Restaurants from "@/screens/Restaurants/Restaurants";
import Header from "@/components/Header/Header";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ route }) => <Header title={route.name} />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cine" component={Cine} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Promo" component={Promo} />
      <Stack.Screen name="Stores" component={Stores} />
      <Stack.Screen name="Restaurants" component={Restaurants} />
    </Stack.Navigator>
  );
}
