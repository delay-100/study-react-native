import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Profile, Settings } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";

const TabIcon = ({ name, size, color }) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        tabBarLabelPosition: "beside-icon", // below-icon
        tabBarActiveColor: "red",
        tabBarInactiveBackgroundColor: "#0f56b3",
        tabBarborderTopColor: "#ffffff",
        tabBarborderTopWidth: 3,
      })}
      //   tabBarOptions={{
      //     showLabel: true,
      //     labelPosition: "beside-icon",
      //     style: {
      //       backgroundColor: "#0f56b3",
      //       borderTopColor: "#ffffff",
      //       borderTopWidth: 3,
      //     },
      //   }}
    >
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({
              ...props,
              name: props.focused ? "mail" : "mail-outline",
            });
          },
          tabBarLabel: "Inbox",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: "person" });
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: "settings" });
          },
        }}
      />
      {/* <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarIcon: (props) => {
            console.log(props);
            return (
              <MaterialIcons
                name="mail"
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNav;
