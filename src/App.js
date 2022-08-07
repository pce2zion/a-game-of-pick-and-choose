import Details from "./components/details";
 import Hero from "./components/hero";
import Nav from "./components/nav";
import JokesData from "./components/jokesdata";
import Jokes from "./components/jokes"
// import Real from "./images/real.jpg"
import Deet from "./components/deet"
import Tenzies from "./components/tenzies";
import { useEffect, useState, useRef } from "react";
import {nanoid} from "nanoid"

// import {Confetti} from "react-confetti";
function App() {
    
    //  const jokeElemnt = JokesData.map(jokes => {
    //       return <Jokes setup = {jokes.setup}
    //        punchline= {jokes.punchline}
    //        />   
    //   })

    //   const importPics = Deet.map(dit => {
    //     return <Details 
    //     key= {dit.id}
    //     image= {dit.coverImg}
    //     rating= {dit.stats.rating}
    //     reviewCount = {dit.stats.reviewCount}
    //     country= {dit.location}
    //     title= {dit.title}
    //     price = {dit.price}
    //     open= {dit.openSpots}
    //  />
//  })





 const generateNewDie = ()=>{
  return {
    value: Math.ceil(Math.random()* 6),
    isHeld: false,
    id: nanoid()
   } 
}



      const rollDice = ()=>{
        const diceArray =[]
        for (let i = 0; i < 10; i++) {
         
           diceArray.push(generateNewDie()) 
        }
        return diceArray
       
      }

     

      const [dice, setDice] = useState(rollDice() )
      const [tenzies, setTenzies] = useState(false)

      const holdDice = (id)=>{
        setDice(prevDice=>prevDice.map(die=>{
         return die.id === id ?{
          ...die,
          isHeld: !die.isHeld
         } : die
          
        })
        )
       
      }
      

    const display = dice.map(die=>{
     return <Tenzies 
     key = {die.id}
     value = {die.value}
     isheld = {die.isHeld}
     holdDie = {holdDice}
     id = {die.id}
     />
    })  
const [loop, setloop] = useState("New Game")
     const rollDie = ()=>{
      if (tenzies) {
        setDice(rollDice())
      setloop("Roll")
       

      } else {
        setDice(prevDice=> prevDice.map(die=>{
          return   die.isHeld ? 
             die : 
             generateNewDie()
             
           }))
      }
       
     }
     

     useEffect(()=>{
     const allHeld =  dice.every(die=> die.isHeld)
       const firstValue = dice[0].value
       const sameValue = dice.every(die=> die.value === firstValue)

        if ( sameValue && allHeld ) {
          setTenzies(true) 
          resetTimer()
        }
     }, [dice])


// the timer code

     const [timer, setTimer] = useState(0)
     const [halt, setHalt] = useState(true)
    
     const stopTimer = ()=>{
      clearInterval(wait.current)
      wait.current = 0
      setHalt(prevHalt=> !prevHalt)
     }

     const wait = useRef();
    const startTimer = ()=>{
    wait.current= setInterval(() => {
   setTimer(prevState=> prevState + 10)
    }, 10)
    setHalt(prevHalt=> !prevHalt) 
}

     const resetTimer = ()=>{
      stopTimer()
      setTimer(0)
     }
  //  timer code end
    
  return (
    <div className="App">
       {tenzies && resetTimer}
     {/* <Nav />
     <Hero /> 
     <section className="cardstyle">
           {importPics}
     </section>
     {jokeElemnt} */}
    <h1 className="title">Tenzies</h1>
    <p className="tenzipara">Roll until all dice are the same. Click each 
    dice to freeze it at its current value between rolls</p>
    <div className="tenzies">
     {display}
    </div>
    <div className="showbtn">
    <button className="btn" onClick={halt? startTimer: stopTimer}>{halt ? "Start Game" :"Pause"}</button>
     <button onClick={rollDie} className="btn">{tenzies ? loop :"Roll"}</button> 
     </div>
     <br />  <br />
     <section>
         <span>{("0" + Math.floor((timer /60000)% 60)).slice(-2)}: </span>
         <span>{("0" + Math.floor((timer / 1000)% 60)).slice(-2)}: </span>
         <span>{("0" + Math.floor((timer / 10)% 100)).slice(-2)} </span>
     </section>
    </div>
 
  );
}

export default App;
