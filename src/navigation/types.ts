import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// 페이지 타입
export type RootStackParamList = {
    Landing: undefined; // 랜딩 페이지

    Login: undefined;   // 메인 로그인
    KakaoLogin: undefined;  // 카카오 로그인

    Home: undefined;    // 홈
    NotFound: undefined;    
};