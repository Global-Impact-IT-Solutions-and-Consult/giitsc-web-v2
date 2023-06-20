import React from 'react'

// STyles
import { Wrapper } from './LayoutWidget.Styles'

const LayoutWidget = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default LayoutWidget