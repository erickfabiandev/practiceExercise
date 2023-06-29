import { useState } from 'react'
import Album from '../album/Album'
import { data } from '../dataAlbum'
import './ListAlbum.css'


const ListAlbum=()=>{

    const [songs,setSongs]=useState(data);

    const handleLike=(id)=>{        
       const likeChange= songs.map((song)=>{return song.id==id?{...song,like:!song.like}:song})
       setSongs(likeChange);
    }

   

  return(  
    <div className='cointaner__List'>
        <h3>ALBUM LIST</h3>
        {songs.map(
            (item)=>{
            return(<Album
                    key={item.id}  
                    image={item.cover_url}
                    id={item.id}
                    name={item.name}
                    artist={item.artist}
                    album={item.album}
                    year={item.year}
                    like={item.like}
                    genre={item.genre}
                    handleChexbox={handleLike}
                /> )  
        })}
    </div>
    
    

  )

    
   

}

export default ListAlbum