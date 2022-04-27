import React from 'react'

import styled from "styled-components/native"
import { colors } from '../../colors';
import { ButtonApp } from '../components/Button';
import { WrapperScreens } from "../components/wrapperScreens"
import { TextStandardLogo, WrapperButtonsStandard } from './styled';

export const StandardScreen = ()=>{
    return (
        <>
            <WrapperButtonsStandard>
                <TextStandardLogo>Light App</TextStandardLogo>
                <ButtonApp color={colors.greenLight100}>On</ButtonApp>
                <ButtonApp color={colors.green0}>Off</ButtonApp>
            </WrapperButtonsStandard>
        </>
    )
}