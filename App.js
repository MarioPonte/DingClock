import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const TimerApp = () => {
  const [seconds, setSeconds] = useState(60); // 5 minutos em segundos
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;

          if (newSeconds <= 0) {
            setIsActive(false);
            setIsFinished(true);
            clearInterval(interval);
            return 0;
          }

          return newSeconds;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
    setIsFinished(false);
  };

  const stopTimer = () => {
    setIsActive(false);
    setSeconds(300); // Reinicia o timer para 5 minutos
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#363636' }}>
      <Text style={{ color: '#F8F8F8', fontSize: 50 }}>{formatTime(seconds)}</Text>
      <Button title="Iniciar" onPress={startTimer} disabled={isActive || isFinished} />
      <Button title="Parar" onPress={stopTimer} disabled={!isActive && !isFinished} />
      <StatusBar/>
    </View>
  );
};

export default TimerApp;