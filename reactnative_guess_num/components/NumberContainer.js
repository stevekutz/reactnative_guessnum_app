import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/colors';

const NumberContainer = props => {

    return (
        <View style = {styles.numberContainer}>
            <Text style = {styles.number} >{props.children}</Text>
        </View>
    )


}

const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 3,
        borderColor: Colors.borderNumContainer,
        padding: 5,
        color: Colors.borderNumContainer,
        // margin: 3,
        alignItems: 'center',
        justifyContent: 'center',
    
    
    },
    number: {
        color: Colors.numColor,
        fontSize: 30,
    
    }


})

export default NumberContainer