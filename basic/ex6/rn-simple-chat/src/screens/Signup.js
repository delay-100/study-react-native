import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Button, Image, Input, ErrorMessage } from "../components";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signup } from "../firebase";
import { Alert } from "react-native";
import { validateEmail, removeWhitespace } from "../utils";
import { UserContext, ProgressContext } from "../contexts";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

// padding-top: ${({ insets: { top } }) => top}px;
// padding-bottom: ${({ insets: { bottom } }) => bottom}px;

// const LOGO =
//   "https://firebasestorage.googleapis.com/v0/b/rn-chat-15e2f.appspot.com/o/logo.png?alt=media";

const DEFAULT_PHOTO =
  "https://firebasestorage.googleapis.com/v0/b/rn-chat-15e2f.appspot.com/o/face.png?alt=media&token=f99e61cf-46b0-495e-b6ee-ba0404368409";

const Signup = ({ navigation }) => {
  // const insets = useSafeAreaInsets();
  const { setUser } = useContext(UserContext);
  const { spinner } = useContext(ProgressContext);

  const [photo, setPhoto] = useState(DEFAULT_PHOTO);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const refPasswordConfirm = useRef(null);
  const refDidMount = useRef(null);

  useEffect(() => {
    setDisabled(
      !(name && email && password && passwordConfirm && !errorMessage)
    );
  }, [email, name, passwordConfirm, password, errorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let error = "";
      if (!name) error = "Please enter your name";
      else if (!email) error = "Please enter your email";
      else if (!validateEmail(email)) error = "Please verify your email";
      else if (password.length < 6)
        error = "The password must contain 6 characters at least";
      else if (password !== passwordConfirm) {
        error = "Password need to match";
      } else {
        error = "";
      }
      setErrorMessage(error);
    } else {
      refDidMount.current = true;
    }
  }, [email, name, passwordConfirm, password]);

  const _handleSignupBtnPress = async () => {
    // console.log("signup");
    try {
      spinner.start();
      const user = await signup({
        name,
        email,
        password,
        photo,
      });
      setUser(user);
      // navigation.navigate("Profile", { user });
    } catch (e) {
      Alert.alert("Signup Error", e.message);
    } finally {
      spinner.stop();
    }
  };
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={20}
      contentContainerStyle={{ flex: 1 }}
    >
      {/* <Container insets={insets}> */}
      <Container>
        <Image showButton={true} url={photo} onChangePhoto={setPhoto} />
        <Input
          label="Name"
          placeholder="Name"
          returnKeyType="next"
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => refEmail.current.focus()}
          onBlur={() => setName(name.trim())}
          maxLength={12}
        />
        <Input
          ref={refEmail}
          label="Email"
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => refPassword.current.focus()}
          onBlur={() => setEmail(removeWhitespace(email))}
        />
        <Input
          ref={refPassword}
          label="Password"
          placeholder="Password"
          returnKeyType="done"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          onSubmitEditing={() => refPasswordConfirm.current.focus()}
          onBlur={() => setPassword(removeWhitespace(password))}
        />
        <Input
          ref={refPasswordConfirm}
          label="Password Confirm"
          placeholder="Password Confirm"
          returnKeyType="done"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          isPassword={true}
          onSubmitEditing={_handleSignupBtnPress}
          onBlur={() => setPassword(removeWhitespace(passwordConfirm))}
        />
        <ErrorMessage message={errorMessage} />
        <Button
          title="Sign up"
          onPress={_handleSignupBtnPress}
          disabled={disabled}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
