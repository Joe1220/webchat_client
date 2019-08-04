import React, { useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import { observer, inject } from 'mobx-react'

export default inject('userStore')(observer(({ userStore, data=userStore.users }) => {
  useEffect(() => {
    userStore.getUsers()
  }, [])
  return (
    <LineChart width={700} height={300} data={data} >
      <XAxis dataKey='key' />
      <YAxis />
      <Tooltip />
      <Line dataKey='value' fill='#8884d8' />
    </LineChart >
  )
}))