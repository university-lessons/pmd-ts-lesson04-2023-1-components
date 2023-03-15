import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Map from "./src/components/Map";
import RouteTracer from "./src/components/RouteTracer";

export default function App() {
  return (
    <View style={styles.container}>
      <Map city="Guarapuava" />
      <RouteTracer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
