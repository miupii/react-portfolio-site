import phone from './assets/phone.png';
import bottle from './assets/bottle.png';
import computer from './assets/computer.png';
import corkboard from './assets/corkboard.png';
import frog from './assets/frog.png';
import game from './assets/game.png';
import keyboard from './assets/keyboard.png';
import poster from './assets/poster.png';
import prism from './assets/prism.png';
import terrarium from './assets/terrarium.png';
import background from './assets/desk.png';
import ClickableObj from "./components/ClickableObj";
import './App.css';


function App(){

  return (
    <>

      <div className='container'>
        <div className='bg-container'>
          <img className='bg-img' src={background} alt="desk" />
          <ClickableObj
            styles={{ width: '10%', bottom: '5%', left: '2%'}}
            source={bottle}
            altText='water bottle'
            popupContent='This water bottle will talk about the Teachable Machine program I made using HTML5 canvas'
          />
          <ClickableObj
            styles={{ width: '20%', top: '5%', right: '2%'}}
            source={corkboard}
            altText='corkboard'
            popupContent='This will talk about the pair programming algorithm in node.js and express'
          />
          <ClickableObj
            styles={{ width: '10%', bottom: '12%', left: '35%'}}
            source={frog}
            altText='frog statue'
            popupContent='This will talk about my frog fury game'
          />
          <ClickableObj
            styles={{ width: '20%', bottom: '3%', left: '17%'}}
            source={game}
            altText='board game'
            popupContent='Dinky Deck Dynasty'
          />
          <ClickableObj
            styles={{ width: '25%', right: '28%', bottom: '4%'}}
            source={keyboard}
            altText='keyboard'
            popupContent='This is about Zine'
          />
          <ClickableObj
            styles={{ width: '15%', top: '11%', left: '25%'}}
            source={poster}
            altText='poster'
            popupContent='This is about Tugboat!'
          />
          <ClickableObj
            styles={{ width: '10%', bottom: '23%', left: '15%'}}
            source={prism}
            altText='prism'
            popupContent='Cards of Light'
          />
          <ClickableObj
            styles={{ width: '10%', bottom: '20%', right: '13%'}}
            source={terrarium}
            altText='terrarium'
            popupContent='This is about SolarPunk'
          />
          <ClickableObj
            styles={{ bottom: '28%', right: '27%', width: '25%'}}
            source={computer}
            altText='computer'
            popupContent="This has testimonials from people I've worked with"
          />
          <ClickableObj 
            styles={{ bottom: '8%', right: '5%', width: '10%'}}
            source={phone}
            altText="phone" 
            popupContent="This is a bunch of text about me, Christina, with links to my LinkedIn and shiz."/>
        </div>
      </div>
    </>
  )
}

export default App;