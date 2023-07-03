import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";
import Button from "./Button";

const StyledInput = styled.TextInput`
  border: 1px solid #111111;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 24px;
`;

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const refName = useRef(null);
  const refEmail = useRef(null);

  let count = 0;

  useEffect(() => {
    console.log("==========Mount==========");
    refName.current.focus();
    return () => console.log("=========unMount===========");
  }, []);
  useEffect(() => {
    console.log(`name: ${name}, email:${email}`);
  }, [email]); //email위치에 적은거를 적어주면 그 변수가 바뀔대만 리렌더링  비어있으면 해당 변수들이 업데이트 될 때 리렌더링

  const onSubmit = () => console.log("submit");
  return (
    <>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Email: {email}</StyledText>
      <StyledInput
        value={name}
        onChangeText={setName}
        placeholder="name"
        ref={refName}
        returnKeyType="next"
        onSubmitEditing={() => refEmail.current.focus()}
      />
      <StyledInput
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        ref={refEmail}
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />

      <Button title="count" onPress={(count) => count + 1} />
      {/* useEffect에 있는 console.log를 호출하지 않음 */}
    </>
  );
};

export default Form;
