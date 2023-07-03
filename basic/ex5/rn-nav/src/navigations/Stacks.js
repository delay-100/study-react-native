import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, List, Chat } from "../screens";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: "#ffffff" },
        headerStyle: {
          height: 120,
          backgroundColor: "#555555",
          borderBottomWidth: 5,
          borderBottomColor: "#111111",
        },
        headerTitleStyle: {
          fontSize: 24,
          //   color: "#ffffff",
        },
        headerTitleAlign: "center",
        headerTitle: ({ style, tintColor }) => {
          return (
            // <FontAwesome5 name="react" style={style} color={tintColor} />
            <MaterialCommunityIcons
              name="react"
              style={style}
              color={tintColor}
            />
          );
        },
        // headerTitle: (props) => {
        //   console.log(props);
        //   return null;
        // },
        // tintColor: "#ff6600",
        headerBackTitle: "Prev",
        headerBackTitleVisible: true,
        headerBackTitleStyle: { fontSize: 26 },
        headerTintColor: "#ff6600",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        // options={{ cardStyle: { backgroundColor: "#ffffff" } }}
      />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerTitle: "Chat Screen",
          headerBackImage: ({ tintColor }) => {
            return (
              <MaterialIcons
                name="keyboard-backspace"
                size={24}
                color={tintColor}
                style={{ marginRight: 5, marginLeft: 5 }}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
