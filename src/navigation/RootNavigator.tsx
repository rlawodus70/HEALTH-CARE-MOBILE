import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 컴포넌트
// import BottomTab from '../components/BottomTab/BottomTab';

// 페이지 리스트
import LandingScreen from '../screens/Landing/index'; // 랜딩
import LoginScreen from '../screens/Login/index';     // 로그인
import KakaoLoginScreen from '../screens/Login/KakaoLogin'; // 카카오 로그인

import HomeScreen from '../screens/Home/index';     // 홈 페이지

const Stack = createNativeStackNavigator();     // Screen과 Navigator 두 가지 속성을 포함하는 객체를 반환하는 함수


export default function RootNavigator(){
    return(
        <NavigationContainer>
            {/* <BottomTab></BottomTab> */}
            <Stack.Navigator
                screenOptions={{ headerShown: false }}  // 앱 상단에 이름 지우기
                initialRouteName="Login"              // 앱 첫 번째로 렌더링할 화면을 등록 = 랜딩 페이지 
            >
                <Stack.Screen name="Landing" component={LandingScreen}></Stack.Screen>
                <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="KakaoLogin" component={KakaoLoginScreen}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}