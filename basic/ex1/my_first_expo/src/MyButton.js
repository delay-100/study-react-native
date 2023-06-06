import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import PropTypes from "prop-types";

// const MyButton = (props) => {
const MyButton = ({
  title = "title",
  onPress = () => {},
  children,
  title2,
}) => {
  // title 기본값 주기
  //   console.log(props);
  return (
    <TouchableOpacity
      //   onPress={props.onPress}
      onPress={onPress}
      //   hitSlop={{ bottom: 100, top: 100, left: 100, right: 100 }} // hitSlop은 공간을 실제로 차지하지 않음(margin은 실제로 공간을차지함)
      //   pressRetentionOffset={{ bottom: 100, top: 100, left: 100, right: 100 }} // 마우스를 꾹누르고 다른곳으로 가면 누름상태가 해제됨
      //
    >
      <View style={{ backgroundColor: "red", padding: 10, margin: 10 }}>
        <Text style={{ fontSize: 20, color: "white" }}>
          {/* {props.children || props.title} */}
          {children || title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  title: "default",
  onPress: () => alert("default"),
};

MyButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  //   title2: PropTypes.string.isRequired,
};

export default MyButton;
