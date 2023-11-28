import React from 'react';
import { MainView, StartButton, TextBtn } from "../../components/styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

const ChessClock = () => {
  return (
    <MainView>
      <Link href="/clock">
        <StartButton>
          <Icon name="clock-o" size={20} color="white" />
          <TextBtn>Start Clock</TextBtn>
        </StartButton>
      </Link>
    </MainView>
  );
};

export default ChessClock;