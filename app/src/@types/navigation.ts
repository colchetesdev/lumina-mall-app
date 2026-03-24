import { NativeStackNavigationProp } from "@react-navigation/native-stack";

 type RoutesParamList = {
  Home: undefined;
  Map: undefined;
  Restaurants: undefined;
  Stores: undefined;
  Promo: undefined;
  Cine: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RoutesParamList>;

//fix navigate('')
