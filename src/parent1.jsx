import React from 'react'
import Child1 from './child1'

const Parent1 = () => {
  return (
    <div>
<Child1 name={"apple"} type={"fruit"}/>
<Child1 name={"banana"}/>
<Child1 name={"hhj"}/>
    </div>
  )
}

export default Parent1