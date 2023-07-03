import React, { createContext } from "react";
import styled from "styled-components/native";
import { UserProvider } from "./contexts/User";
import User from "./components/User";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

export default function App() {
  const UserContext = createContext({ name: "Beomjun" });
  return (
    <UserProvider>
      <Container>
        <User />
      </Container>
    </UserProvider>
    // <UserContext.Provider value={{ name: "Beomjun Kim" }}>
    //   <Container>
    //     <UserContext.Consumer>
    //       {(value) => {
    //         console.log(value);
    //         return <StyledText>{value?.name}</StyledText>;
    //       }}
    //     </UserContext.Consumer>
    //     {/* <UserContext.Consumer>
    //     {(value) => console.log(value)}
    //   </UserContext.Consumer> */}
    //     <UserContext.Provider value={{ name: "Beomjun 2" }}>
    //       <UserContext.Consumer>
    //         {(value) => {
    //           console.log(value);
    //           return <StyledText>{value?.name}</StyledText>;
    //         }}
    //       </UserContext.Consumer>
    //     </UserContext.Provider>

    //     <UserContext.Consumer>
    //       {(value) => {
    //         console.log(value);
    //         return <StyledText>{value?.name}</StyledText>;
    //       }}
    //     </UserContext.Consumer>
    //   </Container>
    // </UserContext.Provider>
  );
}
