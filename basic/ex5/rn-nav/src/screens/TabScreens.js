import react from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0f56b3;
`;
const StyledText = styled.Text`
  font-size: 30px;
`;

export const Mail = () => {
  return (
    <Container>
      <StyledText>Mail</StyledText>
    </Container>
  );
};
export const Profile = () => {
  return (
    <Container>
      <StyledText>Profile</StyledText>
    </Container>
  );
};
export const Settings = () => {
  return (
    <Container>
      <StyledText>Settings</StyledText>
    </Container>
  );
};
