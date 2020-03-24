import React from 'react'

const RandomButton = ({ changeEvent }) => {
  return (
    <section className="button-section">
      <button className="random" onClick={changeEvent}>
        Random Color
      </button>
    </section>
  )
}

export default RandomButton
