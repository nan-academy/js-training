const trunc = el => el - (el % 1)

const round = el =>
        el % 1 >= 0.5 || el % 1 <= -0.5 ? trunc(el >= 0 ? el + 1 : el - 1) : trunc(el)

const ceil = el => (el % 1 > 0 ? trunc(el >= 0 ? el + 1 : el - 1) : trunc(el))
const floor = el => (el % 1 < 0 ? trunc(el >= 0 ? el + 1 : el - 1) : trunc(el))
