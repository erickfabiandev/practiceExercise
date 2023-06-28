import CodigoQR from "./CodigoQR";
import urlImagen from '/src/assets/image-qr-code.png'
import './App.css'

function App(){
  return(
    <CodigoQR 
      imgUrl={urlImagen}
      title='Improve your front-end skills by building projects'
      subtitle='Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
    />
  )

}

export default App