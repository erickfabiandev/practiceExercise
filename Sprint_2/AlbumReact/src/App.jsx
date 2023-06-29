import { useState } from 'react'
import ListAlbum from './components/listalbum/ListAlbum'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <h1>
       ALBUM EN REACT
    </h1>
    <hr></hr>
    <ListAlbum/>
    <Footer/>
    

  </>
     
  )
}

export default App
