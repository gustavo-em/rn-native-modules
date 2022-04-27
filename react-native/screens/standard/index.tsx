import React from 'react'
import { Text } from "react-native"
import styled from "styled-components/native"
import { WrapperScreens } from "../components/wrapperScreens"

const Wrap = styled.View`
    flex: 1;
`;

export const StandardScreen = ()=>{
    return (
        <>
            <WrapperScreens>
              
                    
                    <Text>Teste</Text>
              
            </WrapperScreens>
        </>
    )
}