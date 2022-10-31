const bowlingScore = require('./scoreCard')

describe('calculates the score from a given game', () => {
  it('should be able to calculate score of only strikes', () => {
    expect(bowlingScore([10,10,10,10,10,10,10,10,10,10,10,10])).toEqual(300)
  })

  it('should be able to calculate score of only 0s', () => {
    expect(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0])).toEqual(0)
  })

  it('should be able to calcualte score of only spares', () => {
    expect(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9])).toEqual(190)
  })

  it('should be able to calcualte score of only incomplete throws', () => {
    expect(bowlingScore([8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1])).toEqual(90)
  })
})