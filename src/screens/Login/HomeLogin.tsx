import React, { useState, useRef } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  Image,
  Dimensions,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// import NaverLogin from '../../components/Login/NaverLogin';
import KakaoLoginBtn from '../../components/Login/KakaoLoginBtn';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

type TabSelectorProps = {
  selected: boolean;
};


type LoginScreen3State = {};
type LoginScreen3Props = {};

const HomeLogin: React.FunctionComponent<LoginScreen3State> = (
  props: LoginScreen3Props
) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ 
                    textAlign:"center",
                    fontSize:40,
                    fontFamily:'Roboto-Black',
                    fontWeight:'800',
                    color:"#3F3F44"
                }}>JEJUIN</Text>
            </View>
            <View style={styles.SocialWrapper}>
                {/* <NaverLogin></NaverLogin> */}
                <KakaoLoginBtn></KakaoLoginBtn>
                {/* <TouchableOpacity 
                    style={styles.SocialBtn}
                >
                    <Text style={styles.socialBtnText}>카카오 로그인</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    height: SCREEN_HEIGHT,
    display:"flex",
    justifyContent:"center",
    alignItems: 'center',
    // justifyContent: 'space-around',
    backgroundColor:'white',
    gap:80,
    padding:20
  },
  title:{
    width:'100%',
    // height:'70%',
  },
  SocialWrapper:{
    width:'100%',
    // height:'30%',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap:10,
  },
  SocialBtn:{
    width:'100%',
    height:60,
    backgroundColor:'#424242',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialBtnText:{
    fontSize:18,
    fontWeight:'bold'
  }
});

export default HomeLogin;