import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Colors from '../constants/colors';


const CustomButton = (props) => {

    return (
        <TouchableOpacity activeOpacity = {0.7}  onPress = {props.onPress}>
            <View style = {{...styles.button, ...props.style}}>
                <Text style = {{...styles.buttonText, ...props.style}}> {props.children} </Text>
            </View>
        
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    button: {
        // default colors, override with props where used
        width: '75%',
        minWidth: 105,
        borderWidth: 5,
        borderColor: Colors.borderGrey,
        backgroundColor: Colors.startButton,
        paddingVertical: 4,
        paddingHorizontal: 1,
        marginHorizontal: 2,
        borderRadius: 20,
    },
    buttonText: {
        // borderWidth: 2,
        // borderColor: 'white',
        // width: '95%',

        color: 'white',
        fontFamily: 'open-sans', 
        fontSize: 18,
        textAlign: 'center',
        // marginHorizontal: 2,
    },


});

export default CustomButton;