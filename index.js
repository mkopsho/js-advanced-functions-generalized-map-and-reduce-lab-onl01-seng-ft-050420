// using forEach
function map(sourceArray, func) {
  const newArray = []
  sourceArray.forEach((el) => {
    newArray.push(func(el))
  })
  return newArray
}

// using for loops
function reduce(sourceArray, func, startingPoint) {
  let total
  if (!startingPoint) {
    total = sourceArray[0]
    for (let i = 1; i < sourceArray.length; i++) {
      total = func(sourceArray[i], total)
    }
  } else {
    total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
      total = func(sourceArray[i], total)
    }
  }
  return total
}
