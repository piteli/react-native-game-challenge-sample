import { StackNavigator } from 'react-navigation';
import HomeIndex from '../screens/home';
import QuizIndex from '../screens/quiz';

export const RootStack = StackNavigator(
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
