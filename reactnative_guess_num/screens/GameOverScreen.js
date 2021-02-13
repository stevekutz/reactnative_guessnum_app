import React from 'react';
import {Text, View, Button, Card, StyleSheet} from 'react-native';

const GameOverScreen = props => {

    return (
        <View style = {styles.screen}>
            <Text> Game Over ! </Text>
            <Text> Number of Guess Attempts: {props.guessAttempts}</Text>
            <Text> User's number was {props.userNumber} </Text>
            <Button title = 'Play again' onPress = {props.startGameHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }

})

export default GameOverScreen;