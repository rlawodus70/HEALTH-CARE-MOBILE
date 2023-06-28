import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/Home/index';     // 홈 페이지

const Tab = createBottomTabNavigator();

export default function BottomTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        </Tab.Navigator>
    );
}