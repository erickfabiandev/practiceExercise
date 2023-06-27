import { useState } from 'react'
import reactLogo from './assets/scarecrow.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>    
                 <h2>404 NOT FOUND</h2>
                  <div className="flex-container">
                      <div className="flex-item-img">
                          <img src={reactLogo}/>
                      </div>
                      <div className="flex-item-text">
                          <h3>I have bad news for you</h3>
                          <p>The page you are looking for migth be removed or is temporarily unavailable</p>
                          <a className="item-button" href="#">BACK TO HOME </a>
                      </div>
                  </div>
                  <footer className="atrribute">
                      Code by <a href="https://github.com/erickfabiandev"> Erick Fabian Dev</a>
                  </footer>
             

      </div>
  )
}

export default App
