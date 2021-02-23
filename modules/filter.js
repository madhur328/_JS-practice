const filter = (list, iteratee) => {
    var result = []
    const item_vals = Object.values(list)
    for (var item_val of item_vals) {
        if (iteratee(item_val)) {
            result.push(item_val)
        }
    }
    return result
}

module.exports = {
    filter
}