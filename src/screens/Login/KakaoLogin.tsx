import {StyleSheet, Text, View, Button,TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview'; 
import React from 'react';
import Config from 'react-native-config';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../navigation/types';

export default function WebviewKakaoLogin(){

    // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    // const uri = "https://naver.com";

    /**
     * Emulator에서 개발 localhost로 연결 시 127.0.0.1 => 10.0.2.2로 봐야 함
     * 
     * https://junlab.tistory.com/169
     * https://moonsiri.tistory.com/97
     */

    // const Emulator_uri = `${Config.API_EMULATOR}/auth/kakao`;
    // console.log(Emulator_uri);
    
    // const parseAuthCode = async ( data : any ) => {
    //     console.log(`카카오 로그인 실행 결과 \n 데이터 : ${data}`);
    //     // navigation.navigate("Home");
    // }

    return (
        <View style={ styles.container }>
            {/* <Text>{{ Emulator_uri }}</Text> */}
            <WebView
                // originWhitelist={['*']} // 모든 url을 허용
                // source={{ uri : uri }}
                // source={{ uri : Emulator_uri }}
                // injectedJavaScript={runFirst}
                // javaScriptEnabled={true}
                // onMessage={event => {
                //     parseAuthCode(event.nativeEvent['url']);
                // }}

                // onMessage ... :: webview에서 온 데이터를 event handler로 감지하여 parseAuthCood로 전달
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch', // 이부분 중요 이거 안써주면 WebView 에 width 값을 지정해야함.. 
        justifyContent: 'center',
    },
});