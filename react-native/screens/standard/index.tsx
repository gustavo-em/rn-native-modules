import React from 'react'
import { colors } from '../../colors';
import { ButtonApp } from '../components/Button';
import { TextStandardLogo, WrapperButtonsStandard } from './styled';
import { NativeModules, NativeEventEmitter, Alert } from 'react-native'
const TorchEvents = new NativeEventEmitter(NativeModules.TorchManager)

export const StandardScreen = ()=>{
    const[level, setLevel] = React.useState(0)
    TorchEvents.addListener(
        "onReceived",
        res => {
            setLevel(res.count)
            console.log(res.count)
            Alert.alert('Battery Level', `Level: ${res.count}`)
        }
    )
    const TurnOnTorch = ()=>{
        NativeModules.TorchManager.on()
    }

    const TurnOffTorch = ()=>{
        NativeModules.TorchManager.off()
    }
    return (
        <>
            <WrapperButtonsStandard>
                <TextStandardLogo opacity={level}>Light App</TextStandardLogo>
                <ButtonApp onPress={TurnOnTorch} color={colors.greenLight100}>On</ButtonApp>
                <ButtonApp onPress={TurnOffTorch} color={colors.green0}>Off</ButtonApp>            
            </WrapperButtonsStandard>
        </>
    )
}