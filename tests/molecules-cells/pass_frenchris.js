const RNA = strand => {
        strand = strand.split('')
        for (let i = 0; i < strand.length; i++)
                if (strand[i] === 'C') strand[i] = 'G'
                else if (strand[i] === 'G') strand[i] = 'C'
                else if (strand[i] === 'A') strand[i] = 'U'
                else if (strand[i] === 'T') strand[i] = 'A'
        return strand.join('')
}

const DNA = strand => {
        strand = strand.split('')
        for (let i = 0; i < strand.length; i++)
                if (strand[i] === 'A') strand[i] = 'T'
                else if (strand[i] === 'U') strand[i] = 'A'
                else if (strand[i] === 'C') strand[i] = 'G'
                else if (strand[i] === 'G') strand[i] = 'C'
        return strand.join('')
}
