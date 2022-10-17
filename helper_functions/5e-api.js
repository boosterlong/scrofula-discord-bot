const axios = require('axios');

module.exports = {
    getSpellCard: function getSpellCard (spell) {
        return axios
            .get(`https://www.dnd5eapi.co/api/spells/${spell}/`)
            .then(response => response.data)
    },

    getCondition: function getCondition (condition) {
        return axios
            .get(`https://www.dnd5eapi.co/api/conditions/${condition}/`)
            .then(response => response.data)
    }
}
