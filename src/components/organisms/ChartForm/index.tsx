import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { P } from 'components/atoms'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:first-child) {
    margin-bottom: ${props => props.theme.spaces.base};
  }
`

const ChartForm = observer(({ ChartComponent, data, title }) => {
  return (
    <Wrapper>
      <ChartComponent data={data} />
      <P thick blue>{title}</P>
    </Wrapper>
  )
})

export default ChartForm