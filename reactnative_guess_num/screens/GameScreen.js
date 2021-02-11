import React, {useState, useRef} from 'react';
import {Button, Text, View, StyleSheet, Alert} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';


// use function outside to not require re-render and improve performance
// uses recursion to call itself from within

const generateRandomBetween = (min, max, excludeVal) => {

    min = Math.ceil(min)    
    max = Math.ceil(max)

    const randomNum = Math.floor(Math.random() * (max-min)) + min;

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
    const currentLow = useRef(1);
    const currentHigh = useRef(100)

    const nextGuessHandler = direction => {
        // if guess is out of bounds of available range
        if (
                (direction === 'lower' && currentGuess < props.userChoice) || 
                (direction === 'higher' && currentGuess > props.userChoice)
            ) {
                Alert.alert("Not True", "Out of range", [
                    {text: 'Try again', style: 'cancel'}
                ]);
            return;
        }
        // if guess within available range, generate a new random number

        // useRef creates obj that an be bound to inputs
        // useRef allows defining a value that persists after re-renders
        //   Keep track of guess range values
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
    }


    return (
        <View style = {styles.screen}>
            <Text> Computer guessed number {props.userNumber}</Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style = {styles.buttonContainer}>
                <Button title = 'Lower' onPress = {nextGuessHandler.bind(this, 'higher')} />
                
                <Button title = 'Higher' onPress = {nextGuessHandler.bind(this, 'lower')} />
            
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



