import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carrousel from './components/carrousel/Carrousel'
import {food} from '../src/assets/food/index'
import { nature } from './assets/Nature'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)
  console.log(food)
  return (
    <div className='overflow-hidden flex flex-row w-full'>
      <Carrousel name='Comida' photos={food}></Carrousel>
      <Carrousel name='Naturaleza' photos={nature}></Carrousel>
      <Carrousel name='Comida' photos={food}></Carrousel>
      <Carrousel name='Comida' photos={food}></Carrousel>
      <Carrousel name='Comida' photos={food}></Carrousel>
      <Navbar></Navbar>
    </div>
  )
}

export default App
