const race = (arr) => {
  return new Promise((resolve, reject) => {
    for (let ele of arr) {
      Promise.resolve(ele)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    }
  })
}

const some = (arr, nbr) => {
  if (arr.length === 0 || nbr === 0) return []
  return new Promise((resolve, rejected) => {
    let resolvedProms = []
    let completed = 0

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(async (result) => {
        resolvedProms[i] = await arr[i]
        completed++
        if (completed === nbr) {
          resolve(resolvedProms.filter((ele) => ele === undefined || !!ele))
        }
      })
    }
  })
}
