import styled from "styled-components/native";

export const GameSettingsView = styled.View`
    flex: 1;
    background-color: #363636;
    padding: 10px;
`;

export const Title = styled.Text`
    color: white;
    text-align: center;
    font-size: 28px;
    margin: 10px;
`;

export const Label = styled.Text`
    color: white;
    font-size: 16px;
    margin-bottom: 6px;
`;

export const Input = styled.TextInput`
    border: 1px;
    border-color: white;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
`;

export const SettingsButton = styled.Pressable`
    margin-top: 20px;
    background-color: red;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
`;

export const TextSettingsBtn = styled.Text`
    background-color: red;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
`;