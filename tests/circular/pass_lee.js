const circular = {}

circular.circular = circular

// or, but not that good
/*
const circular = {
  get circular() {
    return circular
  }
}
*/
