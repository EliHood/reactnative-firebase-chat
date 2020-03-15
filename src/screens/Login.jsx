import React, {Fragment} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Subheading} from 'react-native-paper';
import {TextInput, HelperText} from 'react-native-paper';
import {Button} from 'react-native-paper';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = () => {
    const user = {
      email: email,
      password: password,
    };
    props.initLogin(user, props.navigation);
  };
  return (
    <View style={styles.container}>
      <Subheading style={styles.header}>Login</Subheading>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
            Login
          </Button>
          <Subheading style={{margin: 20}}>
            Don't Have an Account ?{' '}
            <Text
              style={{margin: 20, color: 'tomato'}}
              compact={true}
              mode="outlined"
              onPress={() => props.navigation.navigate('Signup')}>
              Click Here
            </Text>
          </Subheading>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 40,
    fontSize: 25,
    marginTop: 10,
  },
  form: {
    padding: 20,
  },
  textField: {
    backgroundColor: 'transparent',
    padding: 0,
    marginBottom: 22,
  },
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
export default Login;
