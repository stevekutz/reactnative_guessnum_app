import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Colors from '../constants/colors';


const StartButton = (props) => {

    return (
        <TouchableOpacity activeOpacity = {0.7}  onPress = {props.onPress}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}> {props.children} </Text>
            </View>
        
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    button: {
        borderWidth: 5,
        borderColor: Colors.borderGrey,
        backgroundColor: Colors.startButton,
        paddingVertical: 14,
        paddingHorizontal: 26,
        borderRadius: 20,
        
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans', 
        fontSize: 18,
    },


});

export default StartButton;