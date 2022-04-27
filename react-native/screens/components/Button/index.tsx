import React from 'react'
import { TextButtonApp, WrapperButtonApp } from './styles'
import { IButtonApp } from './types'

export const ButtonApp = ({color,children}: IButtonApp)=>{
    return (
        <>
            <WrapperButtonApp color={color}>
                <TextButtonApp>{children}</TextButtonApp>
            </WrapperButtonApp>
        </>
    )
}