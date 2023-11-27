import React, { useState, useEffect } from 'react';
import { MainView, TextOptionsButton, StartButton, PlayerButton, TextBtn, TextPlayerBtn, InternalGameOptions } from "../../components/styles";
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';
import { Link } from 'expo-router';

const Clock = () => {
  const initialTimeInSeconds = 300;
  const [player1Time, setPlayer1Time] = useState(initialTimeInSeconds * 1000); // Initial Time in milliseconds
  const [player2Time, setPlayer2Time] = useState(initialTimeInSeconds * 1000);
  const [activePlayer, setActivePlayer] = useState(0); // 0 for nobody, 1 for player 1, 2 for player 2
  const [isPaused, setIsPaused] = useState(false); // Pause clock
  const [sound, setSound] = useState(); // Sound of the Buttons
  const [isSoundEnabled, setIsSoundEnabled] = useState(true); // Sound ON and OFF

  const togglePause = () => setIsPaused((prevIsPaused) => !prevIsPaused);

  useEffect(() => {
    async function setupSound() {
      const { sound } = await Audio.Sound.createAsync(require('../../assets/buttonSound.mp3'));
      setSound(sound);
    }
    setupSound();
  }, []);

  const playSound = async () => {
    if (sound && isSoundEnabled) await sound.replayAsync();
  };

  useEffect(() => {
    let interval;

    if (activePlayer !== 0 && player1Time > 0 && player2Time > 0 && !isPaused) {
      interval = setInterval(() => (activePlayer === 1 ? setPlayer1Time : setPlayer2Time)((prevTime) => prevTime - 100), 46);
    }

    return () => clearInterval(interval);
  }, [activePlayer, player1Time, player2Time, isPaused]);

  const startClock = (player) => setActivePlayer(player);

  const switchPlayer = () => {
    playSound();
    setActivePlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  };

  const resetClock = () => {
    setPlayer1Time(initialTimeInSeconds * 1000);
    setPlayer2Time(initialTimeInSeconds * 1000);
    setIsPaused(false);
    setActivePlayer(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return time > 0 ? `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}` : "Perdeu";
  };

  return (
    <MainView>   
          <PlayerButton android_disableSound={true} onPress={switchPlayer} disabled={isPaused || activePlayer === 1}>
            <TextPlayerBtn>{formatTime(player2Time)}</TextPlayerBtn>
          </PlayerButton>
          <InternalGameOptions>
            <TouchableOpacity onPress={() => setIsSoundEnabled((prevIsEnabled) => !prevIsEnabled)}>
              <TextOptionsButton><Icon name={isSoundEnabled ? 'volume-up' : 'volume-off'} size={26} color="white" /></TextOptionsButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePause}>
              <TextOptionsButton><Icon name={isPaused ? 'play' : 'pause'} size={26} color="white" /></TextOptionsButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={resetClock}>
              <TextOptionsButton><Icon name='rotate-right' size={26} color="white" /></TextOptionsButton>
            </TouchableOpacity>
          </InternalGameOptions>
          <PlayerButton android_disableSound={true} onPress={switchPlayer} disabled={isPaused || activePlayer === 2}>
            <TextPlayerBtn>{formatTime(player1Time)}</TextPlayerBtn>
          </PlayerButton>
    </MainView>
  );
};

export default Clock;