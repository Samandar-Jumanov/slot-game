const prompt = require('prompt-sync')();

prompt(`Each deposit costs : 20$  `)
const NumberOfPlayingTimes =parseFloat( prompt('How many times you wanna play :  '))
const calculatePrice = NumberOfPlayingTimes * 20

const depositSum = prompt('Enter deposit sum : ')
const numDeposit = parseFloat(depositSum)

const spinGame = ()=>{
    let win = false 
    let i = 1 
    while( i <=parseFloat(NumberOfPlayingTimes)){
const getUserValue = () => {

    while(true){
     if(numDeposit < calculatePrice || isNaN(numDeposit)){
         console.log('Invalid deposit ')
     }else {
         console.log(`Your deposit is ${numDeposit}`)
         return;
     }
    }
 }
 getUserValue()

 //Spinning the ball 
 const spin = ()=>{
 const values =[1,2,3]
 
 for(let i = 1 ; i <=3 ; i++){
 const random = Math.floor(Math.random() * values.length)
     const  result =[]
     result.push(random)
     const sameValues = result.every((val, i, arr) => i === 0 || val === arr[i - 1]);
     if(sameValues === true){
         win = true 
         return 
     }else {
         win = false 
         return 
     }
     
 }
 }
 
 if (win === true ){
    console.log('You win')
 }else {
    console.log('You looose ')
 }
 spin()
 i++
    } 
}

spinGame()