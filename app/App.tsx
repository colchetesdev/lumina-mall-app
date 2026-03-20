import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Routes from "@/routes/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
