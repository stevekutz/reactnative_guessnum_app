import React, {useState} from 'react';
import {Alert, View, Text, TextInput, 
        StyleSheet, Button, TouchableWithoutFeedback, 
        Keyboard} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = props => {

    const [numVal, setNumVal ] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [confirmedVal, setConfirmedVal] = useState('')
    //const [numberMessage, setNumberMessage] = useState('Select a Number');

    const handleNumberInput = inputTextVal => {
        setNumVal(inputTextVal.replace(/[^0-9]/g, ''));        
    }

    const resetHandler = () => {
        setNumVal('');
        setConfirmed(false);    
    }

    const confirmHandler = () => {
        const chosenVal = parseInt(numVal);

        // Verify value is valid number
        
        if ( Number.isNaN(chosenVal) || chosenVal <= 0 || chosenVal > 99 || chosenVal === '') {
        //   the following does not detect NaN
        // if ( chosenVal === NaN || chosenVal <= 0 || chosenVal > 99 || chosenVal === '') {
            // setNumVal('');
            // console.log("numVal is ", numVal)
            setConfirmed(false);
            Alert.alert(
                'Invalid input',  // title
                'Enter a number from 1-99', // message 
                [{
                    text: 'OK', // button text
                    style: 'destructive', // choices are: default, cancel, & destructive
                    onPress: resetHandler // callback 
                }]
            )
            return;
        }
            // setNumberMessage(chosenVal.toString());
            setConfirmed(true);
            setConfirmedVal(chosenVal);
            setNumVal('');
            Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}} >
            <View style = {styles.screen}>
                <Text style = {styles.title} > Start a New Game </Text>
                <Card style = {styles.inputContainer}>
                        <Text> Enter a number </Text> 
                        <Input 
                            style = {styles.input} 
                            blurOnSubmit 
                            autoCapitalize = 'none'
                            autoCorrect = {false}  
                            keyboardType = "number-pad"  
                            maxLength = {2}
                            onChangeText = {handleNumberInput}
                            value = {numVal}
                        />
                        <View style = {styles.buttonContainer}>
                            <View style = {styles.buttonStyle}>
                                <Button 
                                    title = 'Reset' 
                                    color = {Colors.primary} 
                                    onPress = {resetHandler} />                        
                            </View>
                            <View style = {styles.buttonStyle}>
                                <Button 
                                    title = 'Confirm' 
                                    color = {Colors.accent} 
                                    onPress = {confirmHandler} 
                                />
                            </View> 
                        </View>
                </Card>

                <View>
                { confirmed  
                    ? 
                        <Card style = {styles.summaryContainer}>
                            {/* <NumberContainer>{numberMessage}</NumberContainer> */}
                            <NumberContainer> {confirmedVal} </NumberContainer>
                            <Text> chosen </Text>
                            <Button 
                                title = 'Start Game ?'
                                onPress = {() => props.startGameHandler(confirmedVal)}
                            />
                        
                        </Card>
                    : 
                        null
                        
                }
                </View>

            </View>    
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        borderWidth: 3,
        borderColor: 'seagreen',
        
        flex: 1,
        padding: 10,
        alignItems: 'center',
        },
    inputContainer: {
        // backgroundColor: 'white',
        // padding: 22,
        // borderRadius: 10,   
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        // // shadow____   only works on iOS
        // shadowColor: 'black',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        // // these only work on Android
        // elevation: 5,


        },
    title: {
        fontSize: 22,
        marginVertical: 10,
        fontFamily: 'atures900',
        // fontFamily: 'open-sans-bold',
        },
    buttonContainer: {
        borderWidth: 1,
        borderColor: 'blue',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

        },
    buttonStyle: {
        borderWidth: 4,
        borderColor: 'pink',
        width: '50%',
        
    },

    input: {
        width: '20%',
        textAlign: 'center',

        padding: 3,
        fontSize: 12,
  

    },

    summaryContainer: {
        margin: 40,
        alignItems: 'center',
    }
})

export default StartGameScreen;

