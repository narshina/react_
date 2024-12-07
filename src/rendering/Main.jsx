import React from 'react'
import Logged from './Logged'
import Notlogged from './Notlogged'

const Main = () => {
  let  islogged=false
  return (
    <div>
        {islogged ?<Logged></Logged>:<Notlogged></Notlogged>}
    </div>
  )
}

export default Main