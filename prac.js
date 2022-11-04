function bowlingScore(rolls) {
  let frames = []
    for(let i = 0; i < rolls.length; rolls[i] === 10 ? i++ :i+=2){
      rolls[i] === 10 || rolls[i]+rolls[i+1] === 10 ? frames.push(rolls[i]+rolls[i+1]+rolls[i+2]) : frames.push(rolls[i]+rolls[i+1])
    }
  return frames.slice(0,10).reduce((partialSum, a) => partialSum + a, 0)
}
console.log(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]))
console.log(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]))

