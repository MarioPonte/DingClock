import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { MainView, PlayerButton, TextBtn } from "./components/styles";

const ChessClock = () => {
  const [player1Time, setPlayer1Time] = useState(300); // Initial Time
  const [player2Time, setPlayer2Time] = useState(300);
  const [activePlayer, setActivePlayer] = useState(0); // 0 for nobody, 1 for player 1, 2 for player 2

  useEffect(() => {
    let interval;

    if (activePlayer !== 0 && player1Time > 0 && player2Time > 0) {
      interval = setInterval(() => {
        if (activePlayer === 1) {
          setPlayer1Time((prevTime) => prevTime - 1);
        } else {
          setPlayer2Time((prevTime) => prevTime - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [activePlayer, player1Time, player2Time]);

  const startClock = (player) => {
    setActivePlayer(player);
  };

  const switchPlayer = () => {
    setActivePlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  };

  const resetClock = () => {
    setPlayer1Time(300);
    setPlayer2Time(3010);
    setActivePlayer(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <MainView>
      {activePlayer === 0 ? (
        <Button title="Start Clock" onPress={() => startClock(1)} />
      ) : (
        <>
          <PlayerButton onPress={switchPlayer} disabled={activePlayer == 1 ? true : false}>
            <TextBtn>{formatTime(player2Time)}</TextBtn>
          </PlayerButton>
          <PlayerButton onPress={switchPlayer} disabled={activePlayer == 2 ? true : false}>
            <TextBtn>{formatTime(player1Time)}</TextBtn>
          </PlayerButton>
        </>
      )}
    </MainView>
  );
};

export default ChessClock;
