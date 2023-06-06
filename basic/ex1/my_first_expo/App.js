import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "./src/MyButton";

export default function App() {
  console.log("react native app");
  return (
    <View style={styles.container}>
      {/* <Text>안뇽하세영</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Button title="Button" onPress={() => alert("Click!!")} /> */}
      <MyButton />
      <MyButton title="MyButton2" onPress={() => alert("2")}>
        MyButton3
      </MyButton>
      <MyButton>Children</MyButton>
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
