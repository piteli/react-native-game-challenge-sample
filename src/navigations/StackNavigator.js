import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeIndex from '../screens/home';
import QuizIndex from '../screens/quiz';

const RootStack = createStackNavigator(
  {
    home: {
      screen: HomeIndex,
      navigationOptions: {
        header: null,
        },
    },
    quiz: {
      screen: QuizIndex,
      navigationOptions: {
        header: null,
        },
    },
  },
  {
    initialRouteName: 'home',
  }
);

const AppStack = createAppContainer(RootStack);

export default AppStack;
