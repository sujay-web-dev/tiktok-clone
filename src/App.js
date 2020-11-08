import React from 'react';
import './App.css';
import Video from './Video';

function App() {

  // const [videos, setvideos] = useState([]);

  return (
    <div className="app">
      <img className="app_logo" src="logo.png" alt=""/>
      <div className="app__videos">

        {/* {videos.map({channel,description,song,likes,messages,shares})} */}

        <Video url="/videos/1c.mp4" channel="ZachKing" description="CakeWalk" song="Original MUSIC ....!!!" likes={123} messages={321} shares={999} />
        <Video url="/videos/2c.mp4" channel="ZachKing" description="Harry Potter" song="Original MUSIC ....!!!" likes={220} messages={451} shares={852} />
        <Video url="/videos/3c.mp4" channel="ZachKing" description="Wet Paint Inception" song="Original MUSIC ....!!!" likes={520} messages={258} shares={963} />
        <Video url="/videos/4c.mp4" channel="ZachKing" description="Bottle Cap Challenge" song="Original MUSIC ....!!!" likes={159} messages={753} shares={369} />
        <Video url="/videos/5c.mp4" channel="ZachKing" description="Hide and Seek" song="Original MUSIC ....!!!" likes={951} messages={324} shares={215} />
        <Video url="/videos/6c.mp4" channel="ZachKing" description="Museum Paint Come Alive" song="Original MUSIC ....!!!" likes={338} messages={601} shares={156} />
      </div>
    </div>
  );
}

export default App;
