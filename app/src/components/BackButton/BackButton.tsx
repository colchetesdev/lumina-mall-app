import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/@types/navigation";
import { Pressable, View } from "react-native";
import { Undo2 } from "lucide-react";
import {styles} from "./styles"
export default function BackButton(){
    const route = useNavigation<NavigationProps>();

    return( 
        <View style= {{flex: 1, margin: 4}}>
            <Pressable style = {styles.btn} onPress={()=> route.navigate("Home")}>
                <Undo2 size={24} color="#e3e3e3"/>
            </Pressable>
        </View>
    )
}