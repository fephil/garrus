/* global $ */

import Holder from 'holderjs'
import Svg4everybody from 'svg4everybody'
import 'feature.js'

// jQuery test
console.log('testing if jquery is loaded globally:')
console.log($)

// Cuts the mustard check to add js class
if ('querySelector' in document && 'addEventListener' in window) {
  var html = document.querySelector('html')
  html.classList.remove('no-js')
  html.classList.add('js')

  // Check if we need fastclick
  if ('touchAction' in document.body.style) {
    document.body.style.touchAction = 'manipulation'
  } else {
    require.ensure(['fastclick'], (require) => {
      const FastClick = require('fastclick')

      window.addEventListener('load', () => {
        FastClick.attach(document.body)
      })
    }, 'fastclick')
  }

  // SVG support
  Svg4everybody()

  // Run Holder
  Holder.run({})
}
