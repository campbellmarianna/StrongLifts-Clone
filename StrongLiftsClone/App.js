// import App from './app/index';

// export default App;

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { constants } from 'expo';
import HomeScreen from './src/components/home';
import DetailScreen from './src/components/detail';


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home",
            headerBackTitle: "Back"
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: "Detail"
        }
    }
});

export default createAppContainer(AppNavigator);