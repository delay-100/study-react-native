import React from "react";
import styled from "styled-components/native";
// import { NavigationContainer } from "@react-navigation/native";
// import StackNav from "./navigations/Stacks";
import Navigation from "./navigations";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Navigation />
    // <NavigationContainer>
    //   <StackNav />
    // </NavigationContainer>
  );
}
