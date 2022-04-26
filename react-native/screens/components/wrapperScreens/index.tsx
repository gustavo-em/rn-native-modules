import React from 'react'
import { SafeAreaView } from 'react-native'
export const WrapperScreens = ({children}: any)=>{
    return (
        <SafeAreaView>
            {children}
        </SafeAreaView>
    )
}