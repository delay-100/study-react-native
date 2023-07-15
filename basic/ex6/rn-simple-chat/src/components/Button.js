import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TRANSPARENT = "transparent";

const Container = styled.View`
  background-color: ${({ theme }) => theme.buttonBackground};
  padding: 10px;
  margin: 10px 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

// const Container = styled.TouchableOpacity`
//   background-color: ${({ theme, isFilled }) =>
//     isFilled ? theme.buttonBackground : TRANSPARENT};
//   align-items: center;
//   border-radius: 4px;
//   width: 100%;
//   padding: 10px;
//   opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
// `;

const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.buttonTitle};
`;

// const Title = styled.Text`
//   height: 30px;
//   line-height: 30px;
//   font-size: 16px;
//   color: ${({ theme, isFilled }) =>
//     isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle};
// `;

const Button = ({ title, onPress, containerStyle, textStyle, disabled }) => {
  return (
    //   TouchableOpacity는 사용자가 이 컴포넌트를 터치했을 때, onPress 기능으로 원하는 동작을 실행시킬 수 있습니다.
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row" }}
      disabled={disabled}
    >
      <Container style={containerStyle} disabled={disabled}>
        <Title style={textStyle}>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};
// const Button = ({ containerStyle, title, onPress, isFilled, disabled }) => {
//   return (
//     <Container
//       style={containerStyle}
//       onPress={onPress}
//       isFilled={isFilled}
//       disabled={disabled}
//     >
//       <Title isFilled={isFilled}>{title}</Title>
//     </Container>
//   );
// };

// Button.defaultProps = {
//   isFilled: true,
// };

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  //   isFilled: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
