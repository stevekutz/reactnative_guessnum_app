import React from 'react';
import {Text, View, Button, Card, Image, StyleSheet} from 'react-native';
import BodyText from '../components/BodyText';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';

const GameOverScreen = props => {


    const sizeInfo = async () => {
    
        // let sizeObj = Image.getSize('https://now.northropgrumman.com/wp-content/uploads/2017/11/11.07.17_mt_everest.jpg', console.log("REALLY Loaded"))
        await Image.getSize('https://now.northropgrumman.com/wp-content/uploads/2017/11/11.07.17_mt_everest.jpg', 
            (width, height) => { 
                if (width > height) {
                    console.log("width BIGGER ", width)

                }
                else if (width < height) {
                    console.log("height BIGGER", height)
                }
            
                console.log(`width X height ${width} ${height}`)
        
            }
        )


        // console.log("REALLY Loaded")
        // console.log("sizeObj is ", sizeObj)

    
    }


    return (
        <View style = {styles.screen}>
        {/*
            <Text> Game Over ! </Text>
            <Text> Number of Guess Attempts: {props.guessAttempts}</Text>
            <Text> User's number was {props.userNumber} </Text>
        */}
            <Text style = {DefaultStyles.titleText}> Game Over ! </Text>
            <View style = {styles.imageContainer}>
                <Image 
                    style = {styles.image}
                    // fadeDuration = {3000} // Android specific prop
                        // used for local images
                    source = {require('../assets/img/success.png')}
                        // used for network images
                    // source = {{uri: 'https://now.northropgrumman.com/wp-content/uploads/2017/11/11.07.17_mt_everest.jpg'}}
                    resizeMode = "cover"

                    // onLoad = {console.log("LOADED")}
                    onLoad = {() => sizeInfo()}
                />
            </View>
            
            <View style = {styles.resultContainer}>
                <BodyText> Number of Guess Attempts: <Text style = {styles.highlight}> {props.guessAttempts} </Text></BodyText>
                <BodyText> User's number was <Text style = {styles.userNumberStyle}> {props.userNumber} </Text> </BodyText>
            </View>

            <CustomButton
                onPress = {props.startGameHandler}>
            Play again ? </CustomButton>
        </View>
    )
}






const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageContainer: {
        //width: '80%',
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 4,
        overflow: 'hidden',
        marginVertical: 32,
    
    },
    image: {
        height: '100%',
        width: '100%',
    },
    resultContainer : {
        marginHorizontal: 30,
        marginVertical: 15,
    },

    highlight: {
        color: Colors.primary,
        fontFamily: 'atures900',
    },

    userNumberStyle: {
        color: Colors.numColor,
        fontFamily: 'atures700',
    
    }
})

export default GameOverScreen;