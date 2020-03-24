import React, { useState, useEffect } from 'react'
import SliderInput from './SliderInput'
import RandomButton from './RandomButton'
const SliderBox = () => {
  const [h, setH] = useState(Math.round(Math.random() * 360))
  const [s, setS] = useState(Math.round(Math.random() * 100))
  const [l, setL] = useState(Math.round(Math.random() * 100))
  const [a, setA] = useState(Math.round(Math.random() * 100))

  const randomColor = () => {
    const hue = Math.round(Math.random() * 360)
    const saturation = Math.round(Math.random() * 100)
    const light = Math.round(Math.random() * 100)
    const alpha = Math.round(Math.random() * 100)
    setH(hue)
    setS(saturation)
    setL(light)
    setA(alpha)
  }
  const adjustHueSlider = (e) => {
    const hue = e.target.value
    setH(hue)
  }
  const adjustSaturationSlider = (e) => {
    const saturation = e.target.value
    setS(saturation)
  }
  const adjustLightSlider = (e) => {
    const light = e.target.value
    setL(light)
  }
  const adjustAlphaSlider = (e) => {
    const alpha = e.target.value
    setA(alpha)
  }
  useEffect(() => {
    const hue = h
    const light = l
    const saturation = s
    const alpha = a
    setH(hue)
    setL(light)
    setS(saturation)
    setA(alpha)
  }, [h, s, l, a])

  return (
    <>
      <section className="color-container">
        <article>
          <div>
            <aside
              className="color-display"
              style={{
                backgroundColor: `hsla(${h}, ${s}%, ${l}%, ${a}%)`,
              }}
            ></aside>
          </div>
          <h5>{`hsl(${h}, ${s}%, ${l}%,${a}%)`}</h5>
        </article>
        <form>
          <div>
            <p>Hue</p>
            <SliderInput
              val={h}
              least="0"
              most="360"
              changeEvent={adjustHueSlider}
            />
          </div>
          <div>
            <p>Saturation</p>
            <SliderInput
              val={s}
              least="0"
              most="100"
              changeEvent={adjustSaturationSlider}
            />
          </div>
          <div>
            <p>Light</p>
            <SliderInput
              val={l}
              least="0"
              most="100"
              changeEvent={adjustLightSlider}
            />
          </div>
          <div>
            <p>Alpha</p>
            <SliderInput
              val={a}
              least="0"
              most="100"
              changeEvent={adjustAlphaSlider}
            />
          </div>
        </form>
      </section>
      <RandomButton changeEvent={randomColor} />
    </>
  )
}

export default SliderBox
