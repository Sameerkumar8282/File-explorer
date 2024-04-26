import React from 'react'
import Explorer from './components/Explorer'
import { DATA } from './constants/data'

const App = () => {
  return (
    <div>
      <Explorer data={DATA}/>
    </div>
  )
}

export default App 