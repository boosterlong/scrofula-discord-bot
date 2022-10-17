module.exports = {
    getRandomInt: function getRandomInt (max) {
        return Math.floor(Math.random() * max) + 1;
    },

    getRandomBigInt: function getRandomInt () {
        return Math.floor(Math.random() * 9001) + 1;
    }
}
