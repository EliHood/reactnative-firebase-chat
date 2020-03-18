import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Subheading} from 'react-native-paper';
import {GiftedChat} from 'react-native-gifted-chat';

function Room(props) {
  const [messages, setMessages] = useState([
    // {
    //   _id: 1,
    //   text: 'Hello developer',
    //   createdAt: new Date(),
    //   user: {_id: 2, name: 'Name'},
    // },
  ]);
  useEffect(() => {
    console.log(props.room.roomKey);
    props.getRoom(props.navigation.state.params.params.roomKey);
  }, []);
  const onSend = (newMessage = []) => {
    console.log(newMessage, messages);
    setMessages(GiftedChat.append(messages, newMessage));
  };
  console.log(props);
  console.log(messages);
  const roomData = props.room && props.room.room ? props.room.room : '';
  return (
    <View style={{flex: 1, margin: 20}}>
      <Subheading style={styles.header}>{roomData.roomName}</Subheading>
      <GiftedChat
        messages={messages}
        onSend={message => onSend(message)}
        user={{
          _id: messages._id,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 40,
    fontSize: 25,
    marginTop: 10,
  },
  container: {
    flex: 1,
  },
});
export default Room;
