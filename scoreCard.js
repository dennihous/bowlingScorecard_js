function bowlingScore(rolls) {
  let frames = []
  if(rolls[rolls.length-3] === 10 || rolls[rolls.length-3]+rolls[rolls.length-2] === 10){
    for(let i = 0; i < rolls.length-2; rolls[i] === 10 ? i++ :i+=2){
      if(rolls[i] === 10 || rolls[i]+rolls[i+1] === 10){
        frames.push(rolls[i]+rolls[i+1]+rolls[i+2])
      } else {
        frames.push(rolls[i]+rolls[i+1])
      }
    }
  } else {
    for(let i = 0; i < rolls.length; rolls[i] === 10 ? i++ :i+=2){
      if(rolls[i] === 10 || rolls[i]+rolls[i+1] === 10){
        frames.push(rolls[i]+rolls[i+1]+rolls[i+2])
      } else {
        frames.push(rolls[i]+rolls[i+1])
      }
    }
  }
  let total = frames.reduce((partialSum, a) => partialSum + a, 0)
  return total
}

console.log(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]))
console.log(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]))

module.exports = bowlingScore