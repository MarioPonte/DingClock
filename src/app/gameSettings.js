import React from 'react';
import { GameSettingsView, Title, Label, Input, SettingsButton, TextSettingsBtn } from "../../components/styles/gameSettingsStyles";

export default gameSettings = () => {
  return (
    <GameSettingsView>
      <Title>Settings</Title>
      <Label>Time for player 1:</Label>
      <Input keyboardType='number-pad' onChangeText={value => value.match(/[0-9]*/gm)} />
      <Label>Time for player 2:</Label>
      <Input keyboardType='number-pad' />
      <SettingsButton><TextSettingsBtn>Save</TextSettingsBtn></SettingsButton>
    </GameSettingsView>
  );
};