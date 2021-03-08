import React from 'react';
import {Text, View, TouchableOpacity, StylSheet, TouchableWithoutFeedback} from 'react-native';
import Colors from '../constants/colors';


const StartButton = (props) => {

    return (
        <TouchableOpacity onPress = {()=> {}}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}> {props.children} </Text>
            </View>
        
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.startButton,
        paddingVertical: 14,
        paddingHorizontal: 26,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans', 
        fontSize: 18,
    }


});

export default StartButton;