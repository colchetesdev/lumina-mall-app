import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";
import { Undo2 } from "lucide-react";
import {styles} from "./styles"
export default function BackButton(){
    const route = useNavigation();
    return( 
        <View style= {styles.container}>
            <Pressable style = {styles.btn} onPress={()=> route.navigate("Home" as never)}>
                <Undo2 size={24} color="#e3e3e3"/>
            </Pressable>
        </View>
    )
}