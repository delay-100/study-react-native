import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Button } from "../components";
import { MaterialIcons } from "@expo/vector-icons";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";
import { app } from "../firebase";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import moment from "moment";

const getDateOrTime = (ts) => {
  const now = moment().startOf("day");
  const target = moment(ts).startOf("day");
  return moment(ts).format(now.diff(target, "day") > 0 ? "MM/DD" : "HH:mm");
};
// const channels = [];

// for (let i = 0; i < 1000; i++) {
//   channels.push({
//     id: i,
//     title: `title:${i}`,
//     description: `desc:${i}`,
//     createdAt: i,
//   });
// }

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.listBorder};
  padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;
const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.listDescription};
`;
const ItemDesc = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: ${({ theme }) => theme.listDescription};
`;
const ItemTime = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.listTime};
`;
const ItemIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "keyboard-arrow-right",
  size: 24,
  color: theme.listIcon,
}))``;

const Item = React.memo(
  ({ item: { id, title, description, createdAt }, onPress }) => {
    console.log(id);

    return (
      <ItemContainer onPress={() => onPress({ id, title })}>
        <ItemTextContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemDesc>{description}</ItemDesc>
        </ItemTextContainer>
        <ItemTime>{getDateOrTime(createdAt)}</ItemTime>
        <ItemIcon />
      </ItemContainer>
    );
  }
);

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

const ChannelList = ({ navigation }) => {
  const [channels, setChannels] = useState([]);

  const db = getFirestore(app);
  useEffect(() => {
    const collectionQuery = query(
      collection(db, "channels"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(collectionQuery, (snapshot) => {
      const list = [];
      snapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setChannels(list);
    });
    return () => unsubscribe();
  }, []);

  const _handleItemPress = (params) => {
    navigation.navigate("Channel", params);
  };
  return (
    <Container>
      <FlatList
        data={channels}
        renderItem={({ item }) => (
          <Item item={item} onPress={_handleItemPress} />
        )}
        keyExtractor={(item) => item["id"]}
        windowSize={5}
      />
    </Container>
  );
};
export default ChannelList;
