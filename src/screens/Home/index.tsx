import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Home(){
    return (
        <>
            <View style={styles.container}>
                <Text>메인페이지</Text>
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