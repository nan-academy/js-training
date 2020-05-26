const all = async (obj) => {
    let res = {}
    for (let [key,value] of Object.entries(obj)){
        res[key] = await value
    }
    return res
}