module.exports = function reverse (n) {
    return n.toString().replace(/[^\d]/g, '').split('').reverse().join('')
}
