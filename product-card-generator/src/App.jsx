import { useState } from 'react'
import ProductCard from './ProductCard/ProductCard'

let card1 = {src: './src/assets/blackHeels.png', name:'Obsidian Velvet Stilettos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, veniam consequuntur doloribus facilis officia libero.', price: '$45,00'}

let card2 = {src: './src/assets/redHeels.png', name:'Ruby Radiance Heels', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, veniam consequuntur doloribus facilis officia libero.', price: '$50,00'}

let card3 = {src: './src/assets/strippedHeels.png', name:'Tango Striped Stilettos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, veniam consequuntur doloribus facilis officia libero.', price: '$40,00'}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCard card = {card1}/>
      <ProductCard card = {card2}/>
      <ProductCard card = {card3}/>
    </>
  )
}

export default App
