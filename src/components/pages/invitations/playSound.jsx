import React, {useState} from 'react';
import Sound from 'react-sound';
import starship from '../audio/Starship   We Built This City (Official Music Video).mp3';
import './playSound.css';

const PlaySound =(
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
 ) => {

    const [isPlaying, setIsPlaying] = useState(true);

    return(
        <div>
            <button className='playSound-button'
            onClick={()=>setIsPlaying(!isPlaying)}
            >
              {!isPlaying? '⏵' : '⏸'}
            </button>
            <Sound
                url={starship}
                playStatus={ 
                    isPlaying? Sound.status.PLAYING : Sound.status.STOPPED 
                }
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    );
};
export default PlaySound;