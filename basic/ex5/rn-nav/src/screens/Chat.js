import React, { useLayoutEffect } from "react"; // useLayoutEffect: 화면이 렌더링 되기 전에 실행됨
import styled from "styled-components/native";
import Button from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* background-color: #ffffff; */
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const Chat = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({ onPress, tintColor }) => {
        return (
          <MaterialIcons
            name="chevron-left"
            size={30}
            style={{ marginLeft: 11 }}
            color={tintColor}
            onPress={onPress}
          />
        );
      },
      headerRight: ({ onPress, tintColor }) => {
        return (
          <MaterialIcons
            name="chevron-right"
            size={30}
            style={{ marginLeft: 11 }}
            color={tintColor}
            onPress={() => navigation.popToTop()}
          />
        );
      },
    });
  });
  return (
    <Container>
      <StyledText>Chat</StyledText>
      <StyledText>{route.params.id}</StyledText>
      <StyledText>{route.params.name}</StyledText>
      <Button
        title="Home"
        onPress={() => navigation.reset({ routes: [{ name: "Home" }] })}
      />
    </Container>
  );
};

export default Chat;
