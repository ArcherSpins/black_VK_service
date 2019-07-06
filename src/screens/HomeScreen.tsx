import React from 'react';
import { Text } from 'react-native';
import ScreenHoc from '../hoc/screen_hov';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    tabBarVisible: false,
  };


  render() {
    return (
      <ScreenHoc {...this.props}>
        <Text>Home</Text>
      </ScreenHoc>
    )
  }
}
