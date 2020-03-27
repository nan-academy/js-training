#!/usr/bin/env node

import { run } from './lib/tester.js'
import * as api from './lib/node-api.js'

run({ args: process.argv.slice(2), ...api }).catch((err) => {
  process.stdout.write(err.stack)
  process.exit(1)
})
