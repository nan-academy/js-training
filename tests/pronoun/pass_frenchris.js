const pronoun = (str) => {
        const pronouns = ["i", "you", "he", "she", "it", "we", "they"]
        let treatedStr = str.toLowerCase().split(/[^\w]/g)
        let answer = {}
        for (let i = 0; i < treatedStr.length; i++) {
                if (pronouns.includes(treatedStr[i])) {
                        if (!answer[treatedStr[i]]) {
                                answer[treatedStr[i]] = {}
                                answer[treatedStr[i]]['word'] = []
                                answer[treatedStr[i]]['count'] = 0
                        }
                        if (treatedStr[i + 1] && !pronouns.includes(treatedStr[i + 1])) answer[treatedStr[i]].word.push(treatedStr[i + 1])
                        answer[treatedStr[i]].count++
                }
        }
        return answer
}
