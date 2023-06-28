import './CodigoQR.css'

function CodigoQR({imgUrl,title,subtitle}){

    return (
        <div className="container">
            <img 
            className="container__img" 
            src={imgUrl} alt="Code QR"
            />
            <p className="container__title">{title}</p>
            <p className="container__subtitle">{subtitle}</p>
        </div>
    )
}

export default CodigoQR