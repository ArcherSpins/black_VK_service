import React, { Component } from 'react';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './redux/reducers';
import Content from './src';
import { SpinnerComponent } from './src/components';
import { Ionicons } from '@expo/vector-icons';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default class App extends Component {

  state = {
      loadedFont: false
  }

  async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({loadedFont: true})
  }



  render() {

    if(!this.state.loadedFont)
      return(
        <SpinnerComponent />
      )

    return (
      <Provider store={store}>
        <Content />
      </Provider>
    );
  }
}
