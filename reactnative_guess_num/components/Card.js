import React from 'react';
import {View, StyleSheet} from 'react-native';


const Card = props => {

    return (
        <View style = {{...styles.card, ...props.style}}>{props.children}</View>
    );

};


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 22,
        borderRadius: 10,   
        // shadow____   only works on iOS
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // these only work on Android
        elevation: 5,

    },

});


export default Card;