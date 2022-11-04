## Rules

1) If rolls[i] === 10 skip one

#### Strike

2) If rolls[i] === 10 add rolls[i]+rolls[i+1]+rolls[i+2] to score

#### Spare

3) If rolls[i]+rolls[i+1] === 10 add rolls[i] + rolls[i+1]+ rolls[i+2] to score

#### Final frame

4) If rolls[rolls.length-3] === 10 and is frame 10, make sure there is an extra go at the end

5) If rolls[rolls.length-3]+rolls[rolls.length-2] === 10 and is frame 10, make sure there is an extra go at the end

