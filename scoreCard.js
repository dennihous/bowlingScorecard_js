function bowlingScore(rolls) {
  let frames = []
  for(let i = 0; i < rolls.length; rolls[i] === 10 ? i+= 3 :i+=2){
    if(rolls[i] === 10){
      frames.push(rolls[i])
    } else {
      frames.push(rolls[i]+rolls[i+1])
    }
  }
  return frames
}

console.log(bowlingScore([8,1, 8,1, 8,1, 8,1, 10, 8,1, 8,1, 8,1, 8,1, 8,1]))

module.exports = bowlingScore