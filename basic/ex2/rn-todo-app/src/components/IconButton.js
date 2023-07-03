import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { icons } from "../icons"; // icons는 객체형태로 되어있음

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
`;
const IconButton = ({ icon, onPress, item }) => {
  // const IconButton = ({ icon, onPress, id, completed }) => {
  const _onPress = () => {
    onPress(item.id);
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} completed={item.completed} />
      </View>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  item: { completed: false },
};

// prop의 타입 지정
IconButton.PropTypes = {
  icon: PropTypes.oneOf(Object.values(icons)).isRequired, // oneOf는 배열 형태로 되어있음, icons는 객체라서 value 하나씩 넣을 수 있게  object.values 사용함
  onPress: PropTypes.func,
  id: PropTypes.string,
  completed: PropTypes.boolean,
};

export default IconButton;
