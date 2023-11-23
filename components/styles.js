import styled from "styled-components/native";

export const MainView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #363636;
`;

export const StartButton = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #DC2F2F;
    padding: 20px;
    border-radius: 10px;
`;

export const TextOptionsButton = styled.Text`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
`;

export const TextBtn = styled.Text`
    margin-left: 8px;
    color: white;
    font-size: 20px;
`;

export const PlayerButton = styled.Pressable`
    background-color: ${({ disabled }) => !disabled ? '#DC2F2F' : '#363636'};
    width: 100%;
    height: 45%;
    justify-content: center;
    align-items: center;
`;

export const TextPlayerBtn = styled.Text`
    color: white;
    font-size: 50px;
    transform: rotate(90deg);
`;

export const InternalGameOptions = styled.View`
    display: flex;
    flex-direction: row;
    background-color: #FF894C;
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
`;