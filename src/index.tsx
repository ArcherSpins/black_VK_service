
import HomeScreen from './screens/HomeScreen';


import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions: {
      tabBarVisible: false,
      header:null,
    },
    tabBarOptions: {
        activeBackgroundColor: '#02518b',
        inactiveBackgroundColor: '#117ac7',
        showIcon: false,
        showLabel: false,
    }
  }
));
