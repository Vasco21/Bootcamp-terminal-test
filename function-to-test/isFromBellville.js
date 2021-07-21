module.exports = function (regNo) {
    var result = regNo.toUpperCase()
    return result.startsWith('CY');
}