function privateFunction() {
  return console.log('this function is not available to other files')
}

export function testFunction(message) {
  /* You could call privateFunction() here and it would work */
  /* However, the function is not exported so is not available to other modules */
  // privateFunction()

  return console.log(message)
}
