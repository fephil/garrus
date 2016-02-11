/* global $ */

import Holder from 'holderjs'
import FastClick from 'fastclick'
import svg4everybody from 'svg4everybody'

// jQuery test
console.log('testing if jquery is loaded globally:')
console.log($)

// Cuts the mustard check to add js class
if ('querySelector' in document && 'addEventListener' in window) {
  var html = document.querySelector('html')
  html.classList.remove('no-js')
  html.classList.add('js')

  // Add fastclick
  FastClick.attach(document.body)

  // Run Holder
  Holder.run({})

  // SVG support
  svg4everybody()
}
