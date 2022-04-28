import styled from 'styled-components/native'
import { colors } from '../../colors'

export const WrapperPageStandard = styled.View`
    flex: 1;
`
export const WrapperButtonsStandard = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const TextStandardLogo = styled.Text`
    font-size: 40px;
    color: ${colors.green100};
    opacity: ${props=>props.opacity};
    margin-bottom: 50px;

`


