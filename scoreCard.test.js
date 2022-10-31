const { it } = require('node:test')
const bowlingScore = require('./scoreCard')

describe('calculates the score from a given game', () => {
  it('should be able to calculate score of only strikes', () => {
    expect(bowlingScore([10,10,10,10,10,10,10,10,10,10,10,10])).toBe(300)
  })

  it('should be able to calculate score of only 0s', () => {
    expect(bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0)
  })

  it('should be able to calcualte score of only spares', () => {
    expect(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9])).toBe(190)
  })
})