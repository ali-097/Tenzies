// import React ,{useState, useEffect} from "react"
// import Boxes from "./Boxes"
// import {nanoid} from "nanoid"
// //import boxData from "./boxData"

// const Game = () => {
//     //const [square, setSquare] = useState(boxData)

//     const generateNewDie = () => {
//         return {
//             id : nanoid(),
//             number: Math.floor(Math.random() * 6),
//             isHeld: false
//         }
//     }

//     const getNewDice = () => {
//         const newDice = []
//         for (let i = 0; i < 10; i++) {
//             newDice.push(generateNewDie())
//         }
//         return newDice
//     }

//     const [dice, setDice] = useState(getNewDice())
//     const [tenzies, setTenzies] = useState(false)

//     useEffect(() => {
//         const allHeld = dice.every(die => die.isHeld)
//         const firstVal = dice[0].number
//         const allSame = dice.every(die => die.number === firstVal)
//         if (allHeld && allSame) {
//             setTenzies(true)
//             console.log("You Won")
//         }
//     }, [dice])

//     const reRollDice = () => {
//         if (!tenzies) {
//             setDice(oldDice => {
//                 return oldDice.map(item => {
//                     return item.isHeld ? item : generateNewDie()
                    
//                 })
//             })
//         } else {
//             setTenzies(false)
//             setDice(getNewDice())
//         }
//     }

//     const toggle = (id) => {
//         setDice(oldDice => {
//             return oldDice.map(item => {
//                 return item.id === id ? {...item, isHeld: !item.isHeld} : item
//             }
//             )
//         })
//         //console.log(square[id].on)
//     }

//     const sqElements = dice.map(die => <Boxes key={die.id} 
//         number={die.number} isHeld={die.isHeld} toggle={() => toggle(die.id)}/>)
//     // console.log(dice)
//     return (
//         <div>
//             <div className="dice--container">
//                 {sqElements}
//             </div>
//             <div className="button--container" >
//                     <button className="button-19" onClick={reRollDice}>{!tenzies ? 'Roll' : 'New Game'}</button>
//             </div>
//         </div>
//     ) 
// }

// export default Game;

import React ,{useState, useEffect} from "react"
import Boxes from "./Boxes"
import boxData from "./boxData"

const Game = () => {
    const [tenzies, setTenzies] = useState(false)
    const [square, setSquare] = useState(boxData)
    const toggle = (id) => {
        setSquare(prevSq => {
            return prevSq.map(item => {
                return item.id === id ? {...item, on: !item.on} : item
            })
        })
    }

    const reRoll = () => {
        if (!tenzies) {
            setSquare(oldSq => {
                return oldSq.map(item => {
                    return item.on ? item : {...item, num: Math.floor(Math.random() * 6)}
                })
            })
        }
        else {
            setTenzies(false)
            setSquare(boxData)
        }
    }

    const sqElements = square.map((box) => {
        return <Boxes key={box.id} id={box.id} number={box.num} on={box.on} toggle={toggle}/>
    })

    useEffect(() => {
        if (square.every(item => item.on) && square.every(item => item.num === square[0].num)) {
            setTenzies(true)
        }
    }, [square])

    return (
        <div>
            <div className="dice--container">
                {sqElements}
            </div>
            <div className="button--container" >
                    <button className="button-19" onClick={reRoll}>{tenzies ? 'New Game' : 'Roll'}</button>
            </div>
        </div>
    ) 
}

export default Game;