import React, { useState, useEffect } from 'react';
// import Swiper from 'react-native-swiper';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  Dimensions,
  LayoutAnimation,
  UIManager,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export interface app_slider_info{
    url : any,
    title : string,
    content : string
}

const sliders : app_slider_info[]= [ 
    { 
        url : require('../../assets/images/AppCTA/slider_1.jpg'),
        title : '쉽고 편리한 제주도 여행 코스',
        content : '지역, 날짜, 여행지 정보를 담아 여행 가이드 제공합니다.'
    },
    {   
        url : require('../../assets/images/AppCTA/slider_2.jpg'),
        title : '특별했던 제주도 정보',
        content : '피드에서 내가 다녀온 여행지 정보를 공유해보세요.',
    },
    {
        url : require('../../assets/images/AppCTA/slider_3.jpg'),
        title : '내가 다녀온 제주도',
        content : '',
    }
];


const AppCTA:React.FunctionComponent = () => {
    return (
        <>
        </>
    );
};

const styles = StyleSheet.create({
    wrapper:{},
    SwiperBox:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SwiperImg:{
        width: '100%',
        height: SCREEN_HEIGHT,
        position:"absolute",
        top:0,
        left:0,
        bottom:0,
        right:0
    },
    SwiperText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    }
});

export default AppCTA;