import React, { useState, useEffect } from 'react';
import { MainView, StartButton, TextBtn } from "../../components/styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';
import { Link } from 'expo-router';

const ChessClock = () => {
  const initialTimeInSeconds = 300;
  const [player1Time, setPlayer1Time] = useState(initialTimeInSeconds * 1000); // Initial Time in milliseconds
  const [player2Time, setPlayer2Time] = useState(initialTimeInSeconds * 1000);
  const [activePlayer, setActivePlayer] = useState(0); // 0 for nobody, 1 for player 1, 2 for player 2
  const [isPaused, setIsPaused] = useState(false); // Pause clock
  const [sound, setSound] = useState(); // Sound of the Buttons

  useEffect(() => {
    async function setupSound() {
      const { sound } = await Audio.Sound.createAsync(require('../../assets/buttonSound.mp3'));
      setSound(sound);
    }
    setupSound();
  }, []);

  useEffect(() => {
    let interval;

    if (activePlayer !== 0 && player1Time > 0 && player2Time > 0 && !isPaused) {
      interval = setInterval(() => (activePlayer === 1 ? setPlayer1Time : setPlayer2Time)((prevTime) => prevTime - 100), 46);
    }

    return () => clearInterval(interval);
  }, [activePlayer, player1Time, player2Time, isPaused]);

  return (
    <MainView>
      <StartButton>
        <Icon name="clock-o" size={20} color="white" />
        <TextBtn>Start Clock</TextBtn>
      </StartButton>
      <Link href="/clock">Options</Link>
    </MainView>
  );
};

export default ChessClock;