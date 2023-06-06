import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "./src/MyButton";

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);

  console.log("react native app");
  return (
    <View style={styles.container}>
      {/* <Text>안뇽하세영</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Button title="Button" onPress={() => alert("Click!!")} /> */}

      {/* <MyButton title={234} /> typeerror! */}
      {/* <MyButton title="MyButton2" onPress={() => alert("2")}>
        MyButton3
      </MyButton> */}
      {/* <MyButton>Children</MyButton> */}

      <Text style={{ fontSize: 20 }}>{addition} </Text>
      <Text style={{ fontSize: 20 }}>{multiple} </Text>
      <MyButton title="addition" onPress={() => setAddition(addition + 2)} />
      <MyButton title="multiple" onPress={() => setMultiple(multiple * 2)} />
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
