import React from 'react';
import { MainView, TextBtn } from "../../components/styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

export default ChessClock = () => {
  return (
    <MainView>
      <Link href="/clock" style={{backgroundColor: "#DC2F2F", padding:20, width: "88%", borderRadius: 10, marginTop: 10, marginBottom: 10}}>
          <Icon name="clock-o" size={20} color="white" /> <TextBtn>Start Clock</TextBtn>
      </Link>
      <Link href="/gameSettings" style={{backgroundColor: "#DC2F2F", padding:20, width: "88%", borderRadius: 10, marginTop: 10, marginBottom: 10}}>
          <Icon name="gear" size={20} color="white" /> <TextBtn>Game Settings</TextBtn>
      </Link>
    </MainView>
  );
};