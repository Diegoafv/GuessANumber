import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Colors from '../constants/Colors'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.number}>The Game is Over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.accent,
        fontSize: 22,
    }
});
export default GameOverScreen;