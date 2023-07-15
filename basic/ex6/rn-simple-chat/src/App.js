import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigations";
import { ProgressProvider, UserProvider } from "./contexts";

// import { Text } from "react-native";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
        {/* <Text>aa</Text> */}
        <UserProvider>
          <StatusBar
            backgroundColor={theme.background}
            barStyle="dark-content"
          />
          <Navigation />
        </UserProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default App;
