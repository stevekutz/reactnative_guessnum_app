import React, {useState, useRef, useEffect} from 'react';
import {Button, Text, View, StyleSheet, Alert} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';


// use function outside to not require re-render and improve performance
// uses recursion to call itself from within
 
const generateRandomBetween = (min, max, excludeVal) => {

    min = Math.ceil(min)    // rounds up to next largest integer
    max = Math.floor(max)   // return largest integer <= the provided numerical argument

    // generate random number between min(included) & max(excluded)
    const randomNum = Math.floor( Math.random() * (max-min) + min);

    // verify
    // do not allow computer to guess user's number on first guess
    if (randomNum === excludeVal) {
        return generateRandomBetween(min, max, excludeVal);
    } else {
        return randomNum;
    }

}



const GameScreen = props => {

    // generate number 
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userNumber));


    // useRef creates obj that can be bound to inputs
    //  useRef allows values to persist throughout component re-renders
    const currentLow = useRef(1);
    const currentHigh = useRef(100)

    // useEffect runs AFTEr component re-renders
    useEffect( () => {
        if (props.userNumber) {
            
        
        }
    })

    const nextGuessHandler = direction => {

        console.log( 'direction is ', direction );

        if (
            (direction === 'lower' && currentGuess < props.userNumber) ||
            (direction === 'higher' && currentGuess > props.userNumber)
        ) {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [
            { text: 'Sorry!', style: 'cancel' }
        ]);
        return;
        }
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
            {/* <Text> Computer guessed number {props.userNumber}</Text> */}
            <Text> Computer guessed number </Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style = {styles.buttonContainer}>
                <Button title = 'Lower' onPress = {nextGuessHandler.bind(this, 'lower')} />
                
                <Button title = 'Higher' onPress = {nextGuessHandler.bind(this, 'higher')} />
            
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



