import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppCTA from './AppCTA';

type LoginComponentProps = {};

const Landing: React.FunctionComponent<LoginComponentProps>= () => {
    return (
        <>
            <ScrollView>
                <AppCTA />
            </ScrollView>
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

export default Landing;