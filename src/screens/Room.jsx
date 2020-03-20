import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';
import {Subheading, Caption} from 'react-native-paper';
import {GiftedChat} from 'react-native-gifted-chat';
import auth from '@react-native-firebase/auth';
function Room(props) {
  const mounted = useRef();
  const [messages, setMessages] = useState([
    // {
    //   _id: 1,
    //   text: 'Hello developer',
    //   createdAt: new Date(),
    //   user: {_id: 2, name: 'Name'},
    // },
  ]);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      props.getRoom(props.navigation.state.params.params.roomKey);
      setMessages(props.room.messages);
      console.log('ourtest', auth().currentUser);
    } else {
      setMessages(props.room.messages);
    }
    return function cleanUp() {
      props.closeChat();
    };
  }, []);
  const onSend = (newMessage = []) => {
    setMessages(GiftedChat.append(messages, newMessage));
    console.log(newMessage, messages);
    console.log(props);
    console.log('oourOWls', newMessage[0]);
    props.initAddMessage(
      newMessage[0],
      props.navigation.state.params.params.roomKey,
    );
  };
  const roomData = props.room && props.room.room ? props.room.room : '';
  console.log('test', props.room);
  const userId = auth().currentUser.uid;
  return props.room.isLoading === false ? (
    <View style={{flex: 1, margin: 20}}>
      <Subheading style={styles.header}>{roomData.roomName}</Subheading>
      <Caption style={styles.caption}>{roomData.roomDesc}</Caption>
      {props.room.messages ? (
        <GiftedChat
          showAvatarForEveryMessage={true}
          showUserAvatar={true}
          renderUsernameOnMessage={true}
          messages={messages}
          onSend={message => onSend(message)}
          user={{
            _id: userId,
            name: auth().currentUser.displayName,
            avatar: 'https://placeimg.com/140/140/any',
          }}
        />
      ) : (
        <ActivityIndicator />
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
