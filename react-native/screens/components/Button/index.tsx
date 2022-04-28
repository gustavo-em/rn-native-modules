import React from 'react'
import { TextButtonApp, WrapperButtonApp } from './styles'
import { IButtonApp } from './types'

export const ButtonApp = ({color,children,onPress}: IButtonApp)=>{
    return (
        <>
            <WrapperButtonApp onPress={onPress} color={color}>
                <TextButtonApp>{children}</TextButtonApp>
            </WrapperButtonApp>
        </>
    )
}