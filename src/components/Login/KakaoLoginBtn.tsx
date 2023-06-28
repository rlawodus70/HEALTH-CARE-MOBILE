import {StyleSheet, Text, View, Button,TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackScreenProps } from "@react-navigation/stack";
// import {
//     KakaoOAuthToken,
//     KakaoProfile,
//     getProfile as getKakaoProfile,
//     login,
//     logout,
//     unlink,
// } from '@react-native-seoul/kakao-login';

import { RootStackParamList } from '../../navigation/types';
// export type KakaoProps = StackScreenProps<RootStackParamList,'KakaoLogin'>

export default function KakaoLoginBtn(){
// function KakaoLoginBtn ({ navigation, route } : KakaoProps ){

    console.log('KakaoLoginBtn');
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    // console.log( 'KakaoLoginBtn', navigation.navigate("KakaoLogin") );

    // const navigation = useNavigation<StackNavigationProp<RootStackParamList>();

    // const signInWithKakao = async (): Promise<void> => {
        // const token: KakaoOAuthToken = await login();

        // setResult(JSON.stringify(token));
    // };

    const signInWithKakao = async (): Promise<void> => {
        // console.log('signInWithKakao')
        navigation.navigate("KakaoLogin");
    }

    // const signOutWitahKakao = async (): Promise<void> => {
    //     const message = await logout();

    //     setResult(message);
    // };

    // const getKakaoProfile = async (): Promise<void> => {
    //     const profile: KakaoProfile = await getProfile();

    //     setResult(JSON.stringify(profile));
    // };

    // const unlinkKakao = async (): Promise<void> => {
    //     const message = await unlink();

    //     setResult(message);
    // };

    return (
        <View style={{ width:'100%' }}>
            <TouchableOpacity 
                onPress={()=> signInWithKakao()}
                style={{        
                    width:'100%',
                    height:48,
                    backgroundColor:'#FEE500',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal:30,
                    paddingVertical:5,
                    borderRadius:12,
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 1,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    gap:10
                }} 
            >
                <Image
                    style={{ 
                        width:23, 
                        height:23,
                    }}
                    source={require('../../assets/images/Login/kakao-logo-short.png')}
                />
                <Text
                    style={{
                        width : '90%',
                        textAlign:'center',
                        fontSize:16,
                        fontFamily:'NotoSansKR',
                        fontWeight:'800',
                        color:'#00000085'
                    }}
                >카카오로 로그인</Text>
            </TouchableOpacity>           
        </View>
    );
}

// export default KakaoLoginBtn