import React from 'react';
import {Text, View, Button, Card, Image, StyleSheet} from 'react-native';
import BodyText from '../components/BodyText';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {

    return (
        <View style = {styles.screen}>
        {/*
            <Text> Game Over ! </Text>
            <Text> Number of Guess Attempts: {props.guessAttempts}</Text>
            <Text> User's number was {props.userNumber} </Text>
        */}
            <Text style = {DefaultStyles.titleText}> Game Over ! </Text>
            <View style = {styles.imageContainer}>
                <Image 
                    style = {styles.image}
                    source = {require('../assets/img/success.png')}
                    resizeMode=  "cover" 
                />
            </View>
            
            <BodyText> Number of Guess Attempts: {props.guessAttempts}</BodyText>
            <BodyText> User's number was {props.userNumber} </BodyText>

            <Button title = 'Play again' onPress = {props.startGameHandler} />
        </View>
    )
}






const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageContainer: {
        width: '80%',
        height: 300,
        borderRadius: 200,
        borderWidth: 4,
        overflow: 'hidden',
        marginVertical: 32,
    
    },
    image: {
        height: '100%',
        width: '100%',
    
    }

})

export default GameOverScreen;