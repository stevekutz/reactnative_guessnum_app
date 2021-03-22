// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
// import { AppLoading } from 'expo'; // prolongs default loading of App screen until a particular task is done
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const addedFonts = {
    'atures100' : require('./assets/fonts/Atures-100_PERSONAL_USE.ttf'),
    'atures300' : require('./assets/fonts/Atures-300_PERSONAL_USE.ttf'),
    'atures500' : require('./assets/fonts/Atures-500_PERSONAL_USE.ttf'),
    'atures700' : require('./assets/fonts/Atures-700_PERSONAL_USE.ttf'),
    'atures900' : require('./assets/fonts/Atures-900_PERSONAL_USE.ttf'),  // bolder
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'nasalization-rg' : require('./assets/fonts/nasalization-rg.ttf'),
    'Raleway-Bold' : require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-ExtraBold' : require('./assets/fonts/Raleway-ExtraBold.ttf'),
    'Raleway-ExtraLight' : require('./assets/fonts/Raleway-ExtraLight.ttf'),
    'Raleway-Heavy' : require('./assets/fonts/Raleway-Heavy.ttf'),
    'Raleway-Light' : require('./assets/fonts/Raleway-Light.ttf'),
    'Raleway-Medium' : require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Regular' : require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-SemiBold' : require('./assets/fonts/Raleway-SemiBold.ttf'),
    'Raleway-Thin' : require('./assets/fonts/Raleway-Thin.ttf'),

}


// const fetchFonts = async () => {
    
//     await Font.loadAsync(
//     // return Font.loadAsync({   // returns a Promise
//         addedFonts
//     );

// }


export default function App() {

    // while userNumber exists, GameScreen component should be active , NOT ''
    const [userNumber, setUserNumber] = useState();
    const [guessAttempts, setGuessAttempts] =  useState(0);
    // const [dataLoaded, setDataLoaded] = useState(false);
    let [fetchFonts] = useFonts( addedFonts )

    // if (!dataLoaded) {
    if ( !fetchFonts ) {
        return (
            <AppLoading 
                // startAsync = {fetchFonts} 
                // onFinish = {() => setDataLoaded(true)}
                // onError = {() => console.log(err)}
            />
        
        )
        
    } 

    // currentGuess from GameScreen component should be passed into handler
    const startGameHandler = (selectedNumber) => {

        if (guessAttempts) {
            setUserNumber(null);
        } else {
            setUserNumber(selectedNumber);
        }

        setGuessAttempts(0)        

        // console.log('Chosen Number ', selectedNumber)
    }

    const gameOverHandler = (attemptCount) => {
        setGuessAttempts(attemptCount.length)
    
    }



    let content = <StartGameScreen startGameHandler = {startGameHandler} />;
    

    if (userNumber && guessAttempts <= 0) {
        console.log('userNumber is ', userNumber)
        content = (
            <GameScreen 
                userNumber = {userNumber} 
                gameOverHandler = {gameOverHandler} 
                    
            />
        
        
        )
    } else if (guessAttempts > 0) {
        content = (
        
            <GameOverScreen
                guessAttempts = {guessAttempts}
                userNumber = {userNumber}
                startGameHandler = {startGameHandler}
            />
        )
        
    }


    return (

    

        <View style={styles.screen}>
            <Header title = "Guess a Number" />
            
            {content}
                    
        </View>
    );

    
    
    
    
    
    
    
    
    
    
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }



const styles = StyleSheet.create({
  screen: {
    flex: 1,

  },
});

