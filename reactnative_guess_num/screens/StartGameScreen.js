import React, {useState} from 'react';
import {Alert, View, Text, TextInput, 
        StyleSheet, Button, TouchableWithoutFeedback, 
        Keyboard} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import CustomButton from '../components/CustomButton';

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
                        {/* <Text> Enter a number </Text>  */}
                        <BodyText> Enter a Number ! </BodyText>
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
                            
                                <CustomButton 
                                    style = {styles.reset} 
                                    color = {Colors.primary} 
                                    onPress = {resetHandler} 
                                > Reset </CustomButton>                        


                                <CustomButton 
                                    // title = 'Confirm' 
                                    style = {styles.confirm}
                                    color = {Colors.confirm} 
                                    onPress = {confirmHandler} 
                                > Confirm </CustomButton>
                            

                        </View>
                </Card>

                <View style = {styles.summaryView}>
                { confirmed  
                    ? 
                        <Card style = {styles.summaryContainer}>
                            {/* <NumberContainer>{numberMessage}</NumberContainer> */}
                            <NumberContainer> {confirmedVal} </NumberContainer>
                            <Text> chosen </Text>
                            <CustomButton 
                                style = {styles.start}
                                onPress = {() => props.startGameHandler(confirmedVal)}>
                            Start Game ? </CustomButton> 
                
                        
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
        width: '80%',
        minWidth: 150,
        // maxWidth: '80%',
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
        justifyContent: 'space-between',
        // width: 50,
        // display: 'flex',
        // justifyContent: 'space-between',
        paddingHorizontal: 6,
        // margin: 5,

        },
    buttonStyle: {
        borderWidth: 2,
        borderColor: 'pink',
        width: '60%',
        minWidth: 150,
        paddingHorizontal: 10,
        textAlign: 'center',
    },

    reset: {
        borderColor: Colors.borderLightGreen,
        backgroundColor: '#2A643E',
        fontFamily: 'nasalization-rg',
    
    },

    confirm: {
        borderColor: Colors.borderLightBlue,
        backgroundColor: '#28599E',
        fontFamily: 'nasalization-rg',
    }, 

    start: {
        borderColor: Colors.borderGrey,
        backgroundColor: 'seagreen',
        // width: '90%',
        width: '60%',
    },

    input: {
        width: '20%',
        textAlign: 'center',

        padding: 1,
        fontSize: 12,
  

    },

    summaryView: {
        borderWidth: 2,
        borderColor: 'green',
        width: '80%',
    },

    summaryContainer: {
        borderWidth: 1,
        borderColor: 'orange',
        // width: '100%',
        margin: 40,
        alignItems: 'center',
    }
})

export default StartGameScreen;

