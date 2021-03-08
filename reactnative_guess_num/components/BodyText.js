import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BodyText = props => <Text style = {{...styles.body, ...props.style}}> {props.children} </Text>

const styles = StyleSheet.create({
    body: {
        fontFamily: 'atures500',
        fontSize: 16,
        padding: 6,
        }
})

export default BodyText;