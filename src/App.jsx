import React, { useState, useEffect } from 'react'

const App = () => {
  const [h, setH] = useState(Math.round(Math.random() * 360))
  const [s, setS] = useState(Math.round(Math.random() * 100))
  const [l, setL] = useState(Math.round(Math.random() * 100))
  const [a, setA] = useState(Math.round(Math.random() * 100))
  // randomColor = () => {
  //   this.setState({
  //     h: Math.round(Math.random() * 360),
  //     s: Math.round(Math.random() * 360),
  //     l: Math.round(Math.random() * 100),
  //     a: Math.round(Math.random() * 100),
  //   })
  // }
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

  return (
    <>
      <h1>HSL Color Picker</h1>
      <section className="color-container">
        <article>
          <div>
            <aside
              className="color-display"
              style={{
                backgroundColor: `hsl(${h}, ${s}%, ${l}%, ${a}%)`,
              }}
            ></aside>
          </div>
          <h5>{`hsl(${h}, ${s}%, ${l}%,${a}%)`}</h5>
        </article>
        <form>
          <div>
            <p>Hue</p>
            <input
              type="range"
              className={'hue'}
              min="0"
              max="360"
              onChange={adjustHueSlider}
              value={h}
            ></input>
          </div>
          <div>
            <p>Saturation</p>
            <input
              type="range"
              className={'saturation'}
              min="0"
              max="100"
              onChange={adjustSaturationSlider}
              value={s}
            ></input>
          </div>
          <div>
            <p>Light</p>
            <input
              type="range"
              className="light"
              min="0"
              max="100"
              onChange={adjustLightSlider}
              value={l}
            ></input>
          </div>
          <div>
            <p>Alpha</p>
            <input
              type="range"
              className="alpha"
              min="0"
              max="100"
              onChange={adjustAlphaSlider}
              value={a}
            ></input>
          </div>
        </form>
      </section>
      <section className="button-section">
        <button className="random" onClick={randomColor}>
          Random Color
        </button>
      </section>
    </>
  )
}

export default App
