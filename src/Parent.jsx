import React from 'react'
import { Child } from './child'

export const Parent = () => {
  return (
    <div>
        <Child  name={"rose"}/>
        <Child name={"jasmine"}/>
        <Child name={"sunflower"}/>
    </div>
  )
}
