import React from 'react'

const RegularFuncComp: React.FC<{name: string}> = function({ name }) {
  console.log('Regular functional component');
  return (
    <div>{name}</div>
  )
}

export default RegularFuncComp;