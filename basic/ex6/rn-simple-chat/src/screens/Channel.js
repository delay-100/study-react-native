import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components/native";
import { Input } from "../components";
import { createMessage, getCurrentUser, app } from "../firebase";
import { GiftedChat, Send } from "react-native-gifted-chat";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  doc,
  orderBy,
} from "firebase/firestore";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const SendIcon = styled(MaterialIcons).attrs(({ theme, text }) => ({
  name: "send",
  size: 24,
  color: text ? theme.sendButtonActivate : theme.sendButtonInactivate,
}))``;

const SendButton = (props) => {
  return (
    <Send
      {...props}
      containerStyle={{
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 4,
      }}
      disabled={!props.text}
    >
      {/* <MaterialIcons name="send" size={24} />; */}
      <SendIcon text={props.text} />
    </Send>
  );
};

// const StyledText = styled.Text`
//   font-size: 30px;
// `;

const Channel = ({ navigation, route }) => {
  const [messages, setMessages] = useState([]);
  const { uid, name, photo } = getCurrentUser();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title || "Channel",
    });
  }, []);

  const db = getFirestore(app);
  useEffect(() => {
    const docRef = doc(db, "channels", route.params.id);
    const collectionQuery = query(
      collection(db, `${docRef.path}/messages`),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(collectionQuery, (snapshot) => {
      const list = [];
      snapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setMessages(list);
    });
    return () => unsubscribe();
  }, []);
  const _handleMessageSend = async (messageList) => {
    // console.log(message);
    const message = messageList[0];
    try {
      await createMessage({ channelId: route.params.id, message });
    } catch (e) {
      Alert.alert("Message Error", e.message);
    }
  };
  return (
    <Container>
      <GiftedChat
        placeholder="Enter a message..."
        messages={messages}
        user={{ _id: uid, name, avator: photo }}
        onSend={_handleMessageSend}
        renderSend={(props) => <SendButton {...props} />}
        scrollToBottom={true}
        renderUsernameOnMessage={true}
        alwaysShowSend={true}
        multiline={false}
      ></GiftedChat>
    </Container>

    // const [message, setMessage] = useState("");
    // <Container>
    //   <StyledText>Channel</StyledText>
    //   <Input
    //     value={message}
    //     onChangeText={setMessage}
    //     onSubmitEditing={() =>
    //       createMessage({ channelId: route.params.id, message })
    //     }
    //   />
    //   {/* <StyledText>{route.params.id}</StyledText>
    //   <StyledText>{route.params.title}</StyledText> */}
    // </Container>
  );
};

export default Channel;
