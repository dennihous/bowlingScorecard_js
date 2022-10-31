function bowlingScore(rolls) {
  let frames = []
  for(let i = 0; i < rolls.length; rolls[i] === 10 ? i++ :i+=2){
    if(rolls[i] === 10 || rolls[i]+rolls[i+1] === 10){
      frames.push(rolls[i]+rolls[i+1]+rolls[i+2])
    } else {
      frames.push(rolls[i]+rolls[i+1])
    }
  }
  return frames
}

console.log(bowlingScore([8,1, 8,1, 8,1, 8,1, 10, 10, 8,1, 8,1, 8,1, 8,1]))

module.exports = bowlingScore