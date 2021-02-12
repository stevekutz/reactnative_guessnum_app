// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

    // while userNumber exists, GameScreen component should be active , NOT ''
    const [userNumber, setUserNumber] = useState();


    // currentGuess from GameScreen component should be passed into handler
    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        console.log('Chosen Number ', selectedNumber)
    }

    let content = <StartGameScreen startGameHandler = {startGameHandler} />;
    

    if (userNumber) {
        console.log('userNumber is ', userNumber)
        content = <GameScreen userNumber = {userNumber}/>
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

