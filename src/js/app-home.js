/* global feature */

import './common'

// Example module
import example from './example'
example.test('output this message to the console')

// Example feature.js usage
if (feature.touch) {
  console.log('touch is supported')
} else {
  console.log('touch is NOT supported')
}
