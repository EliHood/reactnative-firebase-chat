import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Subheading} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput, HelperText} from 'react-native-paper';
import SignUpForm from './../forms/SignUp';
import {Button} from 'react-native-paper';
function SignUp(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const onSubmit = () => {
    const user = {
      email: email,
      password: password,
      userName: username,
    };
    props.initRegister(user, props.navigation);
  };
  return (
    <Fragment>
      <Subheading style={styles.header}>Another Chat App</Subheading>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.container}
        scrollEnabled={false}>
        <View style={styles.form}>
          <TextInput
            style={styles.textField}
            name="email"
            label="Enter Email"
            value={email}
            error={null}
            autoCapitalize="none"
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            style={styles.textField}
            name="username"
            label="Enter Username"
            value={username}
            error={null}
            autoCapitalize="none"
            onChangeText={username => setUsername(username)}
          />
          <TextInput
            style={styles.textField}
            name="email"
            label="Enter Password"
            value={password}
            error={null}
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={password => setPassword(password)}
          />
          <Button
            style={{margin: 20}}
            compact={true}
            mode="outlined"
            onPress={onSubmit}>
            Sign Up
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    fontSize: 25,
    marginTop: 0,
  },
  form: {
    padding: 20,
  },
  textField: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    marginBottom: 12,
  },
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
export default SignUp;
