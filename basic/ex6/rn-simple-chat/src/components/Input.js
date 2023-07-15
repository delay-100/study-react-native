import React, { useState, forwardRef } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

// const Label = styled.Text`
//   font-size: 14px;
//   font-weight: 600;
//   margin-bottom: 6px;
//   color: ${({ theme, isFocused }) =>
//     isFocused ? theme.text : theme.inputLabel};
// `;

// const StyledInput = styled.TextInput.attrs(({ theme }) => ({
//   placeholderTextColor: theme.inputPlaceholder,
// }))`
//   background-color: ${({ theme }) => theme.inputBackground};
//   color: ${({ theme }) => theme.text};
//   padding: 20px 10px;
//   font-size: 16px;
//   border: 1px solid
//     ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
//   border-radius: 4px;
// `;

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.inputPlaceholder,
}))`
  background-color: ${({ theme, editable }) =>
    editable ? theme.inputBackground : theme.inputDisabled};
  color: ${({ theme }) => theme.text || "black"};
  padding: 20px 10px;
  font-size: 16px;
  border: 1px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.text : theme.inputBorder || "black"};
  border-radius: 4px;
`;

const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.text || "black" : theme.label || "gray"};
`;

const Input = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur,
      placehoder,
      returnKeyType,
      maxLength,
      isPassword,
      disabled,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Container>
        <Label isFocused={isFocused}>{label}</Label>
        <StyledInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          placeholder={placehoder}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          isFocused={isFocused}
          onFocus={() => setIsFocused(true)}
          secureTextEntry={isPassword}
          editable={!disabled}
        />
      </Container>
    );
  }
);

Input.defaultProps = {
  onBlur: () => {},
};
Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onBlur: PropTypes.func,
  placehoder: PropTypes.string,
  returnKeyType: PropTypes.oneOf(["done", "next"]),
  maxLength: PropTypes.number,
  isPassword: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
