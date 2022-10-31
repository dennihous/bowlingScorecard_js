const bowlingScore = require('./scoreCard')

describe('calculates the score from a given game', () => {
  it('should be able to calculate score of only strikes', () => {
    expect(bowlingScore([10,10,10,10,10,10,10,10,10,10,10,10])).toBe(300)
  })
})