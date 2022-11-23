import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from '../components/Main/Main'

function App() {
  return (
  <div id="App">
  <Main />
  </div>
  )
}

export default App

/* <div id="App">
      <div id="titleText">
        <div id="h1Text">URL SHORTENER</div>
        <div id="h2Text">PASTE YOUR LINK TO CREATE SHORTENED URL</div>
      </div>
      <div id="communicate">
      <Main />
      </div>
      <div id="shortenURL">
        <div>SHORTEN NAME</div>
        <input value={shortenURLValue} name="shortenURLValue" onChange={
          e => setShortenURLValue(e.target.value)
        } />
      </div>
      <div id="inputURL">
        <div>YOUR URL</div>
        <input value={inputURLValue} name="inputURLValue" onChange={
          e => setInputURLValue(e.target.value)
        } />
      </div>
      <button id="createButton" onClick={()=> console.log(shortenURLValue)}>CREATE</button>
    </div> */

