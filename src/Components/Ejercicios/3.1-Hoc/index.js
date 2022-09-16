import React from 'react'
import Example from './Example'
import { Container } from './hoc_style'
import Test from './Test'

const Hoc = () => {
  return (
    <>
    <h1>Hoc</h1>
    <Container>
      <Test text="Hola"/>
      <Example text="Mundo"/>
    </Container>
    </>
  )
}

export default Hoc