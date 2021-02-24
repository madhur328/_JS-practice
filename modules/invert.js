const invert = (obj) => {
    let result = {}
    if (typeof obj === "object") {
        let values = Object.values(obj);
        let keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            result[values[i]] = keys[i]
        }
    }
    return result;
}
module.exports = {
    invert
}