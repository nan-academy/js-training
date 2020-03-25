/*

## fizzbuzz

### Instructions

Create a `fizzbuzz` function that takes a number as parameter and returns all 
numbers from 1 to the number passed as parameter, with three exception.

- For numbers divisible by 3, print "Fizz".

- For numbers divisible by 5, print "Buzz".

- For the number that are divisible by 3 and 5 print "FizzBuzz".

### Notions

- Loops or Recursion

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => typeof fizzbuzz === 'function')
t(() => fizzbuzz.length === 1)
t(
  () =>
    fizzbuzz(100) ===
    '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz '
)
t(
  () =>
    fizzbuzz(60) ===
    '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz '
)
t(
  () =>
    fizzbuzz(300) ===
    '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz 101 Fizz 103 104 FizzBuzz 106 107 Fizz 109 Buzz Fizz 112 113 Fizz Buzz 116 Fizz 118 119 FizzBuzz 121 122 Fizz 124 Buzz Fizz 127 128 Fizz Buzz 131 Fizz 133 134 FizzBuzz 136 137 Fizz 139 Buzz Fizz 142 143 Fizz Buzz 146 Fizz 148 149 FizzBuzz 151 152 Fizz 154 Buzz Fizz 157 158 Fizz Buzz 161 Fizz 163 164 FizzBuzz 166 167 Fizz 169 Buzz Fizz 172 173 Fizz Buzz 176 Fizz 178 179 FizzBuzz 181 182 Fizz 184 Buzz Fizz 187 188 Fizz Buzz 191 Fizz 193 194 FizzBuzz 196 197 Fizz 199 Buzz Fizz 202 203 Fizz Buzz 206 Fizz 208 209 FizzBuzz 211 212 Fizz 214 Buzz Fizz 217 218 Fizz Buzz 221 Fizz 223 224 FizzBuzz 226 227 Fizz 229 Buzz Fizz 232 233 Fizz Buzz 236 Fizz 238 239 FizzBuzz 241 242 Fizz 244 Buzz Fizz 247 248 Fizz Buzz 251 Fizz 253 254 FizzBuzz 256 257 Fizz 259 Buzz Fizz 262 263 Fizz Buzz 266 Fizz 268 269 FizzBuzz 271 272 Fizz 274 Buzz Fizz 277 278 Fizz Buzz 281 Fizz 283 284 FizzBuzz 286 287 Fizz 289 Buzz Fizz 292 293  Fizz Buzz 296 Fizz 298 299 FizzBuzz '
)

Object.freeze(tests)
