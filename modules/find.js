const find = (list, func) => {
    const values = Object.values(list)
    for (var value of values) {
        if (func(value)) {
            return value
        }
    }
    return undefined
}

module.exports = {
    find
}