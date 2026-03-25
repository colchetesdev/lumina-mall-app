import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    btn: {
        flexDirection: "row",
        height: 48,
        width: 176,
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        borderRadius:8,
        boxShadow: "0px 4px 4px rgba(0,0,0,0.1)",
        marginVertical:  12,
    },
    btnText: {
        fontWeight: 600, 
        fontSize: 16,
        paddingHorizontal: 8,
    }
})