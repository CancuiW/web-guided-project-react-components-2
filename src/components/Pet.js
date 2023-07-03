import React from 'react'

export default function Pet(props) {
  const { pet } = props
 // console.log(pet)

  return (
    <div className='pet-friends container'>
      <p>{pet.name} ({pet.type})</p>
    </div>
  )
}
