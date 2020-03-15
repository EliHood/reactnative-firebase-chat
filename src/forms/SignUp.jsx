import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import {Button} from 'react-native-paper';
import {TextInput, HelperText} from 'react-native-paper';
const SignUpForm = props => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <TextInput
      style={styles.textField}
      name="email"
      label="Enter Email"
      value={null}
      error={null}
      autoCapitalize="none"
      onChangeText={null}
    />
    <Button
      style={styles.logInbutton}
      icon="arrow-forward"
      compact={true}
      mode="outlined"
      onPress={null}>
      Sign Up
    </Button>
  </KeyboardAvoidingView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignUpForm;
