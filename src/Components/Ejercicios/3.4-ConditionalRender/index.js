import React, { useState } from 'react'

const ConditionalRender = () => {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 5000);

  return (
    <>
    { loading ? <h1>Loading...</h1> : <h1>Pagina Cargada Exitosamente :)</h1> }
    </>
  )
}

export default ConditionalRender

