import React, {useState, useRef, useEffect} from 'react';
import {Button, Text, View, StyleSheet, Alert} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import DefaultStyles from '../constants/default-styles';
import {Entypo} from '@expo/vector-icons';



import Colors from '../constants/colors.js';

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

    // destructure props
    const {userNumber, gameOverHandler} = props;

    // generate number 
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNumber));


    // useRef creates obj that can be bound to inputs
    //  useRef allows values to persist throughout component re-renders
    const currentLow = useRef(1);
    const currentHigh = useRef(100)

    // define localState to count guesses within GameScreen component
    const [guessCount, setGuessCount] = useState(0);


    // useEffect runs AFTER component re-renders
    useEffect( () => {

        console.log("useEffect props.guessCount", guessCount);
        console.log("guessCount ", guessCount);

        if (currentGuess === userNumber) {
            gameOverHandler(guessCount);       
        }
    // }, [currentGuess, gameOverHandler, userNumber]);
    }, [currentGuess]);

    const nextGuessHandler = direction => {

        console.log( 'direction is ', direction );

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
        Alert.alert("Invalid direction!", 'Please select correct hint', [
            { text: 'OK!', style: 'cancel' }
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
        setGuessCount( guessVal => guessVal + 1)
    }


    return (
        <View style = {styles.screen}>

            <Text style = {DefaultStyles.bodyText}> Computer guessed number </Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style = {styles.buttonContainer}>
                {/* <Button title = 'Lower' onPress = {nextGuessHandler.bind(this, 'lower')} /> */}
                {/* <Button title = 'Lower2' onPress = {() => nextGuessHandler('lower')} /> */}
                <CustomButton 
                    style = {styles.lowerStyle}
                    onPress = {() => nextGuessHandler('lower')}
                    
                ><Entypo name = 'arrow-bold-up' size = {20} color = 'white' />Lower
                 <Entypo name = 'arrow-bold-down' size = {20} color = 'white' /> 
                </CustomButton>

                {/* <Button title = 'Higher' onPress = {nextGuessHandler.bind(this, 'higher')} /> */}
                <CustomButton
                    style = {styles.higherStyle}
                    onPress = {() => nextGuessHandler('higher')}
                ><Entypo 
                    iconStyle = {{ marginRight: '100' }}
                    name = 'arrow-bold-up' 
                    size = {20} 
                    color = 'white' />Higher
                 <Entypo name = 'arrow-bold-up' size = {20} color = 'white' />
                </CustomButton>

            
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
        width: '90%',
        maxWidth: '95%', 
    
    },
    lowerStyle: {
        borderColor: Colors.borderLightGrey,
        backgroundColor: Colors.backgroundLightBlue,
        fontFamily: 'Raleway-SemiBold',
    },
    higherStyle: {
        borderColor: Colors.borderLightGrey,
        backgroundColor: Colors.backgroundLightPink,
        fontFamily: 'Raleway-SemiBold',
    },

})


export default GameScreen;



