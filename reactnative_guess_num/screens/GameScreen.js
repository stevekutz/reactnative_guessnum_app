import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';


// use function outside to not require re-render and improve performance
// uses recursion to call itself from within

const generateRandomBetween = (min, max, excludeVal) => {

    min = Math.ceil(min)    
    max = Math.ceil(max)

    const randomNum = Math.floor(Math.random() * (max-min) + min);

    // verify
    // do not allow first choice to given
    if (randomNum === excludeVal) {
        return generateRandomBetween(min, max, excludeVal);
    } else {
        return randomNum;
    }

}



const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

    return (
        <View style = {styles.screen}>
            <Text> Guess Number {props.userNumber}</Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style = {styles.buttonContainer}>
                <Button title = 'Lower' onPress = {() => {}} />
                
                <Button title = 'Higher' onPress = {() => {}} />
            
            </Card>
        </View>    
    )
}

const styles = StyleSheet.create({
    screen: {
        borderWidth: 2,
        borderColor: 'darkred',
        
        margin: 20,
        flex: 1,
        padding: 8,
        alignItems: 'center',

    
    },
    buttonContainer: {
        
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        maxWidth: '85%', 
    
    }



})


export default GameScreen;



