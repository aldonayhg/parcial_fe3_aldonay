import React from 'react'

const Card = ({input1, input2}) => {
  return (
    <div>
      <h2> Información ingresada: </h2>
      <p>Nombre: {input1}</p>
      <p>Apellido: {input2}</p>
    </div>
  )
}

export default Card