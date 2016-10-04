/* global feature */

import './common'
import 'feature.js'
import { testFunction } from './example'

// Cuts the mustard check
if ('querySelector' in document && 'addEventListener' in window) {
  console.log('run home modules')

  // Example feature.js usage
  if (feature.touch) {
    console.log('touch is supported')
  } else {
    console.log('touch is NOT supported')
  }

  // Example module
  testFunction('Example Module: output this message to the console')
}
