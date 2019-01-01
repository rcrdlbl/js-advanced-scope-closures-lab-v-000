function produceDrivingRange(range) {
  return function(startBlock, endBlock) {
    if (parseInt(endBlock) - parseInt(startBlock) > range) {
      return `${Math.abs((parseInt(endBlock) - parseInt(startBlock)) - range)} blocks out of range`
    } else {
      return `within range by ${Math.abs(parseInt(endBlock) - parseInt(startBlock))}`
    }
  }
}

function produceTipCalculator(tipAmount) {
  return function(price) {
    return price * tipAmount
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
