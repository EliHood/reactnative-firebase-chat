import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Subheading} from 'react-native-paper';
import {GiftedChat} from 'react-native-gifted-chat';

function Home() {
  const [messages, setMessages] = useState([
    {
      // _id: 1,
      // text: 'Hello developer',
      // createdAt: new Date(),
      // user: {_id: 2, name: 'Name'},
    },
  ]);

  const onSend = (newMessage = []) => {
    console.log(newMessage, messages);
    setMessages(GiftedChat.append(messages, newMessage));
  };
  console.log(messages);
  return (
    <View style={styles.container}>
      <Subheading style={styles.header}>This is the chat</Subheading>

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
export default Home;
