import styled from "styled-components/native";

export const MainView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const PlayerButton = styled.TouchableOpacity`
    background-color: ${({ disabled }) => !disabled ? '#DC2F2F' : '#363636'};
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
`;

export const TextBtn = styled.Text`
    color: white;
    font-size: 50px;
`;

