import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import MyButton from "./MyButton";
// import { styles, orangeText } from "./style";
import styled, { css, ThemeProvider } from "styled-components/native";
import Box from "./Box";
import Shadow from "./Shadow";
import Input from "./Input";
import { Switch } from "react-native";

// View 가 가지고 있는 모든 스타일을 가지고 아래의 스타일이 적용된것
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  align-items: center;
  justify-content: center;
`;

const lightTheme = {
  inputColor: "#111111",
  inputBorder: "#111111",
  bgColor: "#e3e3e3",
};
const darkTheme = {
  inputColor: "#e3e3e3",
  inputBorder: "#e3e3e3",
  bgColor: "#111111",
};

// const cssText = css`
//   font-size: 20px;
//   font-weight: 600;
// `;

// const StyledText = styled.Text`
//   ${cssText}
//   color: blue;
// `;

// const ErrorText = styled(StyledText)`
//   color: red;
// `;

// const ErrorText = styled.Text`
//   ${cssText}
//   color: red;
// `;

// const StyledButton = styled.Button``;

export default function App() {
  //   console.log("react native app");
  //   const [addition, setAddition] = useState(0);
  //   const [multiple, setMultiple] = useState(1);
  const [isLight, toogleTheme] = useState(true);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Container>
        <StatusBar style="auto" />
        <Switch
          value={isLight}
          onValueChange={(isLight) => toogleTheme(isLight)}
        />
        {/* <StyledText style={{ color: "red" }}>Styled Components</StyledText> */}
        {/* <StyledText>Styled Components</StyledText> */}
        {/* <ErrorText>Error!!</ErrorText> */}
        {/* <StyledButton title="Styled" pnPress={() => alert("styled !!")} /> */}
        <Input placeholder="Type a message..." />
        {/* <Input placeholder="Type a message..." /> */}
        <Input />
      </Container>
    </ThemeProvider>
    //      <View style={styles.container}>
    //        <StatusBar style="auto" />
    //       {/* -------- Container 예제 시작 ------- */}
    //       {/* <Text>안뇽하세영</Text> */}
    //       {/* <StatusBar style="auto" /> */}
    //       {/* <Button title="Button" onPress={() => alert("Click!!")} /> */}

    //       {/* <MyButton title={234} /> typeerror! */}
    //       {/* <MyButton title="MyButton2" onPress={() => alert("2")}>
    //           MyButton3
    //         </MyButton> */}
    //       {/* <MyButton>Children</MyButton> */}

    //       {/* <Text style={{ fontSize: 20 }}>{addition} </Text>
    //         <Text style={{ fontSize: 20 }}>{multiple} </Text>
    //         <MyButton title="addition" onPress={() => setAddition(addition + 2)} />
    //         <MyButton title="multiple" onPress={() => setMultiple(multiple * 2)} /> */}

    //       {/* <TextInput
    //         // onChange={(event) => console.log(event.nativeEvent.text)}
    //         onChangeText={(text) => console.log(text)} // text만 가져오고싶다면 이 방법을 이용
    //         style={{ borderWidth: 1, padding: 10, fontSize: 10 }}
    //       /> */}
    //       {/* -------- Container 예제 끝 ------- */}

    //       {/* -------- Style 예제 시작 ------- */}
    //       {/* 1. 스타일링 */}
    //       {/* <View style={styles.container}>
    //         <Text style={[styles.text, orangeText]}>Style Code</Text>
    //         <Text style={[styles.text, styles.errorText]}>Error Text</Text>
    //         <StatusBar style="auto" />
    //       </View> */}

    //       {/* 2. 3. flexbox, flexDirection */}
    //       {/* <Box style={{ backgroundColor: "red", height: 100 }} />
    //       <Box style={{ backgroundColor: "green", flex: 3 }} />
    //       <Box style={{ backgroundColor: "blue", height: 100 }} /> */}

    //       {/* justify content는 가로 방향으로 어떻게 정렬할지?
    //         alignItems는 flexDirection와 수직 방향으로 정렬 */}

    //       {/* 4. 그림자(Reference) */}
    //       {/* Shadow.js 실행 */}
    //       {/* 그림자는 플랫폼에따라 될 수도 안 될수도 있음! */}

    //       {/* -------- Style 예제 끝 ------- */}
    //       <Shadow />
    //      </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
