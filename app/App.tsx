import { NavigationContainer } from "@react-navigation/native";
import Header from "@/components/Header/Header";
import Routes from "@/routes/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
