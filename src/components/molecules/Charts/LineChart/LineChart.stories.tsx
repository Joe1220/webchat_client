import React from 'react'
import { storiesOf } from '@storybook/react'

import LineChart from './'

const exampleData = [
  { key: '2019-01', value: 1 },
  { key: '2019-02', value: 10 },
  { key: '2019-03', value: 50 },
  { key: '2019-04', value: 30 },
  { key: '2019-05', value: 20 },
  { key: '2019-06', value: 20 },
  { key: '2019-07', value: 30 },
  { key: '2019-08', value: 23 },
  { key: '2019-09', value: 30 },
  { key: '2019-10', value: 40 },
  { key: '2019-11', value: 60 },
  { key: '2019-12', value: 110 },
]

storiesOf('Components/Molecules', module)
  .add('Charts/LineChart', () => (
    <React.Fragment>
      <h4>Line Chart</h4>
      <LineChart data={exampleData} />
    </React.Fragment>
  ))
