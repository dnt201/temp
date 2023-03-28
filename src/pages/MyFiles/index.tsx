
import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from 'app/hooks'

import { decrement, increment } from '@redux/counterSlice'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // omit rendering logic
}
const MyFiles = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className=''>MyFiles {count}</div>
      <button onClick={()=> dispatch(increment())}>up</button>
      <button onClick={()=> dispatch(decrement())}>down</button>
    </div>
  )
}

export default MyFiles