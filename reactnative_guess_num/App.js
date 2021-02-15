// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'; // prolongss default loading of App screen until a particular task is done


import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';



const fetchFonts = () => {
    
    // returns a Promise
    Font.loadAsync({
    'atures100' : require('./assets/fonts/Atures-100_PERSONAL_USE.ttf'),
    'atures900' : require('./assets/fonts/Atures-900_PERSONAL_USE.ttf'),  // bolder
    'hemihead' : require('./assets/fonts/HEMIHEAD.TTF')

    });

}


export default function App() {

    // while userNumber exists, GameScreen component should be active , NOT ''
    const [userNumber, setUserNumber] = useState();
    const [guessAttempts, setGuessAttempts] =  useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading 
                startAsync = {fetchFonts} 
                onFinish = {() => setDataLoaded(true)}
                onError = {() => console.log(err)}
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
        setGuessAttempts(attemptCount)
    
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

