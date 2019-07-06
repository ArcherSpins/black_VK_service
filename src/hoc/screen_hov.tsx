import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Container } from 'native-base';
import { FooterComponent, HeaderComponent } from '../components';
import { colorBg, colorMenu } from '../constants';

class HocScreen extends React.Component {
  
    render() {
      return(
        <Container style={{backgroundColor: colorBg}}>
          <HeaderComponent bgColor={colorMenu} />
          <View style={styles.content}>
            {this.props.children}
          </View>
          <FooterComponent navigate={this.props.navigation.navigate} bgColor={colorMenu} />
        </Container>
      )
    }
}


const styles = StyleSheet.create({
    content: {
        flex: 1
    }
});

export default HocScreen 