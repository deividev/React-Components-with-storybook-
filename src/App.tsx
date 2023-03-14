import { useState } from 'react'
import './styles/main.scss';
import Carousel from './components/carousel/carousel'
import { Link } from './components/Link/Link'

function App() {
  const [count, setCount] = useState(0)
  // const items: Item[] = [
  //   {
  //     title: 'Montañas',
  //     imageSrc: 'https://i.imgur.com/hXGVbJM.jpg',
  //     altText: 'Montañas',
  //     caption: 'Las montañas son una de las maravillas naturales más impresionantes del mundo',
  //   },
  //   {
  //     title: 'Cascadas',
  //     imageSrc: 'https://i.imgur.com/Y4NyXWe.jpg',
  //     altText: 'Cascadas',
  //     caption: 'Las cascadas son impresionantes y pueden ser vistas en todo el mundo',
  //   },
  //   {
  //     title: 'Playas',
  //     imageSrc: 'https://i.imgur.com/THoI8fd.jpg',
  //     altText: 'Playas',
  //     caption: 'Las playas son un lugar perfecto para relajarse y disfrutar del sol',
  //   },
  // ];

  return (
    <div className="App">
      <Link url='paco'>PEpo</Link>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
       <h1>Ejemplo de Carousel con datos reales</h1>
      <Carousel />
    </div>
  )
}

export default App
