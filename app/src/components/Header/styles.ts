import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    backgroundColor: "#151f58",
    padding: 4,
    boxShadow: "0 1px 12px 5px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: 64,
    height: 64,
    padding: 4,
  },
  routeContainer: {
    paddingHorizontal: 4,
    display: "flex",
    flexDirection: "row",
  },
  routeName: {
    fontSize: 16,
    fontWeight: 500,
    marginHorizontal: 8,
    color: "#e3e3e3",
  },
  icon: {
    color: "#e3e3e3",
  },
});
