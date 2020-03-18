import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    const user = this.props.user.currentUser;
    this.props.currentUser();
  };

  shouldComponentUpdate(nextProps) {
    console.log('sdddd', nextProps);
    const user = nextProps.user.currentUser;
    if (nextProps.user.currentUser !== this.props.user.currentUser) {
      nextProps.navigation.navigate(user !== null ? 'App' : 'Auth');
      return true;
    }
    // nextProps.navigation.navigate('Auth');
    return false; //this is the missing piece
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.user.isLoading && <ActivityIndicator />}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default AuthLoadingScreen;
