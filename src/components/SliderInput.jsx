import React from 'react'

const SliderInput = ({ changeEvent, val, least, most }) => {
  return (
    <input
      type="range"
      className={'hue'}
      min={least}
      max={most}
      onChange={changeEvent}
      value={val}
    ></input>
  )
}

export default SliderInput
