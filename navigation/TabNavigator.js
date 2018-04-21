import { TabNavigator } from 'react-navigation';

import ProfileSettings from '../screens/ProfileSettings';
import Home from '../screens/Home';
import Matches from '../screens/Matches';

export default TabNavigator({
  ProfileSettings: {
    screen: ProfileSettings,
    navigationOptions: {
      tabBarLabel: 'ProfileSettings',
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
    }
  },
  Matches: {
    screen: Matches,
    navigationOptions: {
      tabBarLabel: 'Matches',
    }
  },
},
{
  navigationOptions: {
    header: null,
  },
  tabBarPosition: 'top',
  initialRouteName: 'Home',
  animationEnabled: true,
  tabBarOptions: {
    style: {
      height: 90,
      backgroundColor: '#fff',
    },
  }
});
