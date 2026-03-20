import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home/Home";
import Cine from "@/screens/Cine/Cine";
import Map from "@/screens/Map/Map";
import Promo from "@/screens/Promo/Promo";
import Shops from "@/screens/Shops/Shops";
import Restaurants from "@/screens/Restaurants/Restaurants";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cine"
        component={Cine}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Promo"
        component={Promo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shops"
        component={Shops}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Restaurants"
        component={Restaurants}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
