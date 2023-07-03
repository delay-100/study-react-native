import React from "react";
import styled from "styled-components/native";
import { Dimensions, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({ width }) => width - 40}px; /* 양쪽 20px 제거하기 위해 40을 뺌 */
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.text};
`;

const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
  // const width = Dimensions.get("window").width; // 현재 화면의 크기를 알 수 있음, useWindowDimensions도 동일한 역할
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none" // 자동 대문자 x
      autoCorrect={false} // 자동 오타수정 x
      returnKeyType="done"
      keyboardAppearance="dark" // ios만 키보드 색상을 어둡게 함
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur} //  Input 창에서 포커스를 잃었을 때 (다른곳 클릭 시) 값 원래값으로 보이게
    />
  );
};

Input.PropTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
