import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HomeLogin from './HomeLogin';

type LoginComponentProps = {};

const Login: React.FunctionComponent<LoginComponentProps> = () => {
    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <HomeLogin />
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        position: 'relative',
    },
});

export default Login;