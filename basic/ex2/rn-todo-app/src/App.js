import React, { useState } from "react";
// import { StatusBar, Dimensions } from "expo-status-bar";
import { StatusBar, Dimensions, StyleSheet, Text, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import Input from "./components/Input";
// import IconButton from "./components/IconButton";
// import { icons } from "./icons";
import Task from "./components/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

// const Container = styled.View`
//   flex: 1;
//   background-color: ${({ theme }) => theme.background};
//   align-items: center;
//   justify-content: flex-start;
// `;

// SafeAreaView는 ios 전용 노치 없애기
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get("window").width;
  // const width = useWindowDimensions().width;

  // const tempData = {
  //   1: { id: "1", text: "React Native", completed: false },
  //   2: { id: "2", text: "Expo", completed: true },
  //   3: { id: "3", text: "JavaScript", completed: false },
  // };
  const [tasks, setTasks] = useState({});
  // const [tasks, setTasks] = useState(tempData);

  const [newTask, setNewTask] = useState("");

  const storeData = async (tasks) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      setTasks(tasks);
    } catch (e) {}
  };
  const getData = async () => {
    const loadedData = await AsyncStorage.getItem("tasks");
    setTasks(JSON.parse(loadedData || "{}"));
  };

  const addTask = () => {
    if (newTask.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    // alert(newTask);
    setNewTask("");
    storeData({ ...tasks, ...newTaskObject });
    // setTasks({ ...tasks, ...newTaskObject });
  };

  const deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    storeData(currentTasks);
    // setTasks(currentTasks);
  };

  const toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]["completed"] = !currentTasks[id]["completed"];
    storeData(currentTasks);
    // setTasks(currentTasks);
  };

  const updateTask = (item) => {
    const currentTasks = Object.assign({}, tasks); // 현재 tasks의 상태를 복사함(기존의 tasks 객체 직접 수정x 새로운 객체 생성)
    currentTasks[item.id] = item; // items 객체를 currentTasks 객체에 할당함, item.id는 item 객체의 고유 식별자(id)를 나타냄
    storeData(currentTasks);
    // setTasks(currentTasks);
  };

  const [isReady, setIsReady] = useState(false);

  return isReady ? (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>ToDo List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addTask}
          onBlur={() => setNewTask("")}
        />
        {/* <IconButton icon={icons.check} onPress={() => alert("check")} />
        <IconButton icon={icons.uncheck} onPress={() => alert("uncheck")} />
        <IconButton icon={icons.edit} onPress={() => alert("edit")} />
        <IconButton icon={icons.delete} onPress={() => alert("delete")} /> */}
        {/* <Task text="React Native" /> */}
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task
                key={item.id}
                item={item}
                // text={item.text}
                // id={item.id}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                updateTask={updateTask}
              />
            ))}
          {/* <Task text="React Nactive" />
          <Task text="Expo" />
          <Task text="JavaScript" />
          <Task text="React Nactive" />
          <Task text="React Nactive" />
          <Task text="React Nactive" />
          <Task text="React Nactive" />
          <Task text="Expo" />
          <Task text="JavaScript" />
          <Task text="React Nactive" />
          <Task text="React Nactive" />
          <Task text="Expo" />
          <Task text="JavaScript" />
          <Task text="React Nactive" />
          <Task text="React Nactive" />
          <Task text="Expo" />
          <Task text="JavaScript" />
          <Task text="React Nactive" /> */}
        </List>
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={getData}
      onFinish={() => setIsReady(true)}
      // onFinish={() => setIsReady(false)}
      onError={() => {}}
    />
  );
}
