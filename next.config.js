/* eslint-disable @typescript-eslint/no-var-requires */
const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  disable: !isProd
})

module.exports = withPWA({
  // next.js config
})
