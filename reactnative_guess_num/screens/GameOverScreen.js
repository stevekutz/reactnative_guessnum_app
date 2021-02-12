import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const GameOverScreen = props => {

    return (
        <View>
            <Text> Game Over ! </Text>
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