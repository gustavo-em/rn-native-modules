import styled from "styled-components/native";
import { colors } from "../../../colors";

export const WrapperButtonApp = styled.TouchableOpacity`
    width: 200px;
    height: 100px;
    border-radius: 5px;
    background-color: ${props=>props.color};
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

export const TextButtonApp = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${colors.white10};

`
