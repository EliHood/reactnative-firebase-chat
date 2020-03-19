import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';
import {Subheading, Caption} from 'react-native-paper';
import {GiftedChat} from 'react-native-gifted-chat';
import auth from '@react-native-firebase/auth';
function Room(props) {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {_id: 2, name: 'Name'},
    },
  ]);
  useEffect(() => {
    const roomData = props.room && props.room.room ? props.room.room : '';
    props.getRoom(props.navigation.state.params.params.roomKey);
    console.log(props.room.room.messages);
    // setMessages(props.room.room.messages);
    setMessages(roomData.messages);
    console.log('ourtest', auth().currentUser);
  }, []);
  const onSend = (newMessage = []) => {
    setMessages(GiftedChat.append(messages, newMessage));
    console.log(newMessage, messages);
    console.log('fsfsfsfsf', newMessage);
    console.log(props);
    props.initAddMessage(
      newMessage[0],
      props.navigation.state.params.params.roomKey,
    );
  };
  const roomData = props.room && props.room.room ? props.room.room : '';
  console.log(roomData.messages);
  console.log('test', props.room);
  const userId = auth().currentUser.uid;
  return props.room.isLoading === false ? (
    <View style={{flex: 1, margin: 20}}>
      <Subheading style={styles.header}>{roomData.roomName}</Subheading>
      <Caption style={styles.caption}>{roomData.roomDesc}</Caption>
      {messages ? (
        <GiftedChat
          messages={messages}
          onSend={message => onSend(message)}
          user={{
            _id: userId,
            name: auth().currentUser.displayName,
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
      ) : (
        <ActivityIndicator
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        />
      )}
    </View>
  ) : (
    <ActivityIndicator
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    fontSize: 25,
    marginTop: 10,
  },
  caption: {
    paddingLeft: 20,
    fontSize: 13,
  },
  container: {
    flex: 1,
  },
});
export default Room;
