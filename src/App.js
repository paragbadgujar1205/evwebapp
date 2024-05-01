import React, {useState, useEffect} from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Background from "./Components/Background/Background.jsx";
import Hero from './Components/Hero/Hero.jsx';

const App = () => {
  const [heroCount,setHeroCount]= useState(2);
  const [playStatus,setPlayStatus]=useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 5000)
  },[])

  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"Your passions"},
  ]
  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} />
    </>
  )
}

export default App
