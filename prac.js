function bowlingScore(rolls) {
  let frames = []
  for(let i = 0; i < rolls.length-2; rolls[i] === 10 ? i++ :i+=2){
    if(rolls[i] === 10 || rolls[i]+rolls[i+1] === 10){
      frames.push(rolls[i]+rolls[i+1]+rolls[i+2])
    } else {
      frames.push(rolls[i]+rolls[i+1])
    }
  }

  let total = frames.reduce((partialSum, a) => partialSum + a, 0)
  arr = [frames, total]
  return arr
}

console.log(bowlingScore([10,10,10,10,10,10,10,10,10,10,10,10]))
console.log(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]))