import './Album.css'

const Album =({
    image,
    id, 
    name, 
    artist,
    album,
    year,
    like,
    genre,
    handleChexbox
})=>{

    return(        
        <div className={`conintainer--${like?'activado':'desactivado'}`} >
            <img className="cointainer__img" src={image}/>
            <div className="cointainer__details">
                <p className="cointainer__details__name">{name}</p>
                <p className="cointainer__details__artist">{artist}</p>
                <p className="cointainer__details__album">{album}</p>
                <p className="cointainer__details__year">{`(${year})`}</p>
                <div className="cointainer__details__interactive">                    
                  <p className="cointainer__details__genre">{genre}</p>
                  <button type="checkbox" className="cointainer__button--like" onClick={(e)=>{handleChexbox(id)}}>
                        <svg className="svg-icon" viewBox="0 0 20 20">
                            <path fill={like?'#82E0AA':'#626567'} d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"></path>
                        </svg>
                        
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Album