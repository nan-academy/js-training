#!/usr/bin/env deno

import { run } from './lib/tester.js'
import * as api from './lib/deno-api.js'

await run({ args: Deno.args, ...api })
