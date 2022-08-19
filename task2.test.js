const { Calculator } = require('./task3')

describe("Calculator Add Tests", ()=> {
  test('Expected 5+2 = 7', () => {
      expect(Calculator.Add(5,2)).toBe(7);
  })
  test('Expected a defined result', () => {
    expect(Calculator.Add(5,2)).toBeDefined();
  })
  test('Expected to be a Number', () => {
    expect(typeof Calculator.Add(5,2)).toBe("number")
  })
})

describe("Calculator Substract Tests", ()=> {
  test('Expected 5-2 = 3', () => {
      expect(Calculator.Sub(5,2)).toBe(3);
  })
  test('Expected a defined result', () => {
    expect(Calculator.Sub(5,2)).toBeDefined();
  })
  test('Expected to be a Number', () => {
    expect(typeof Calculator.Sub(5,2)).toBe("number")
  })
})

describe("Calculator Divide Tests", ()=> {
  test('Expected 10/2 = 5', () => {
      expect(Calculator.Div(10,2)).toBe(5);
  })
  test('Expected a defined result', () => {
    expect(Calculator.Div(5,2)).toBeDefined();
  })
  test('Expected to be a Number', () => {
    expect(typeof Calculator.Sub(5,2)).toBe("number")
  })
})

describe("Calculator Multiply Tests", ()=> {
  test('Expected 10*2 = 20', () => {
      expect(Calculator.Mul(10,2)).toBe(20);
  })
  test('Expected a defined result', () => {
    expect(Calculator.Div(5,2)).toBeDefined();
  })
  test('Expected to be a Number', () => {
    expect(typeof Calculator.Sub(5,2)).toBe("number")
  })
})