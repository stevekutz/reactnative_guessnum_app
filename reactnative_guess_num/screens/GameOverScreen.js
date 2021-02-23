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
                    // used for local images
                    //source = {require('../assets/img/success.png')}
                    // used for network images
                    source = {{uri: 'https://now.northropgrumman.com/wp-content/uploads/2017/11/11.07.17_mt_everest.jpg'}}
                    resizeMode = "cover"
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
        //width: '80%',
        width: 300,
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