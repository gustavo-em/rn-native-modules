import React from 'react'
import { WrapperScreensStyle } from './styled'
export const WrapperScreens = ({children}: any)=>{
    return (
        <WrapperScreensStyle>            
            {children}
        </WrapperScreensStyle>
    )
}