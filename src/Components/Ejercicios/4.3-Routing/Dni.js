import React from 'react'
import { useParams } from 'react-router-dom'

const Dni = () => {

    const { DniNumber } = useParams()

  return (
    <h1>{ DniNumber }</h1>
  )
}

export default Dni