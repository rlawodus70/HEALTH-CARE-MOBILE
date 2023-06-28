// import React, {useState} from 'react';
// import {SafeAreaView, StyleSheet, Button, View, Text,ScrollView, Alert, TouchableOpacity, Image} from 'react-native';
// import NaverLogin, {
//   NaverLoginResponse,
//   GetProfileResponse,
// } from '@react-native-seoul/naver-login';

// const consumerKey = 'hjFmeBoO0szmBUBmMAZ3';
// const consumerSecret = 'wPZAhrKrBD';
// const appName = '제주인';
// const serviceUrlScheme = 'navertest';

// const NaverBtn = ( ) => {
//     const [success, setSuccessResponse] =
//         useState<NaverLoginResponse['successResponse']>();
//     const [failure, setFailureResponse] =
//         useState<NaverLoginResponse['failureResponse']>();
//     const [getProfileRes, setGetProfileRes] = useState<GetProfileResponse>();

//     const login = async () => {
//         await console.log('네이버 로그인 시작')
//         try {
//             const {failureResponse, successResponse} = await NaverLogin.login({
//                 appName,
//                 consumerKey,
//                 consumerSecret,
//                 serviceUrlScheme
//             });
            
//             setSuccessResponse(successResponse);
//             setFailureResponse(failureResponse);
//         } catch (error : any) {
//             console.log('네이버 로그인 error => \n',error);
//             Alert.alert('네이버 로그인 error',error);
//         }

//     };

//     const logout = async () => {
//         try {
//             await NaverLogin.logout();
//             setSuccessResponse(undefined);
//             setFailureResponse(undefined);
//             setGetProfileRes(undefined);
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     const getProfile = async () => {
//         try {
//             const profileResult = await NaverLogin.getProfile(success!.accessToken);
//             setGetProfileRes(profileResult);
//         } catch (e) {
//             setGetProfileRes(undefined);
//         }
//     };

//     const deleteToken = async () => {
//         try {
//             await NaverLogin.deleteToken();
//             setSuccessResponse(undefined);
//             setFailureResponse(undefined);
//             setGetProfileRes(undefined);
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     return (
//         <View style={{ width:'100%' }}>
//             <TouchableOpacity 
//                 onPress={login}
//                 style={{        
//                     width:'100%',
//                     height:60,
//                     backgroundColor:'#03ed67',
//                     display:'flex',
//                     flexDirection:'row',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     paddingHorizontal:30,
//                     paddingVertical:5,
//                     gap:10
//                 }} 
//             >
//                 <Image
//                     style={{ 
//                         width:'10%', 
//                         height:'60%',
//                     }}
//                     source={require('../../assets/images/Login/naver-logo-short.png')}
//                 />
//                 <Text
//                     style={{
//                         width : '90%',
//                         textAlign:'center',
//                         fontSize:18,fontWeight:'bold',
//                         color:'white'
//                     }}
//                 >네이버 로그인</Text>
//             </TouchableOpacity>

//             {/* <Button title={'Logout'} onPress={logout} /> */}
//             {/* {success ? (
//                 <>
//                     <Button title="Get Profile" onPress={getProfile} />
//                     <Gap />
//                 </>
//             ) : null}
//             {success ? (
//                 <View>
//                     <Button title="Delete Token" onPress={deleteToken} />
//                     <Gap />
//                     <ResponseJsonText name={'Success'} json={success} />
//                 </View>
//             ) : null}

//             <Gap />

//             {failure ? 
//                 <ResponseJsonText name={'Failure'} json={failure} /> 
//             : null}

//             <Gap />

//             {getProfileRes ? (
//                 <ResponseJsonText name={'GetProfile'} json={getProfileRes} />
//             ) : null} */}

//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     NaverBtn:{
//         // width:'100%',
//         // height:60,
//         // backgroundColor:'#03ed67',
//         // display:'flex',
//         // flexDirection:'row',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//     },
//     // NaverBtnText:{
//     //     fontSize:18,
//     //     fontWeight:'bold'
//     // }
// });

// // const Gap = () => <View style={{marginTop: 24}} />;
// // const ResponseJsonText = ({json = {}, name}: {json?: object; name: string}) => (
// //     <View
// //         style={{
// //         padding: 12,
// //         borderRadius: 16,
// //         borderWidth: 1,
// //         backgroundColor: '#242c3d',
// //     }}>
// //         <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>{name}</Text>
// //         <Text style={{color: 'white', fontSize: 13, lineHeight: 20}}>{JSON.stringify(json, null, 4)}</Text>
// //     </View>
// // );


// export default NaverBtn;