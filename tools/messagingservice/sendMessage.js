const axios = require("axios");

// Args
exports.required = ['message', 'experienceId']
//exports.optional = ['']

// Docs
/**
 * 📨 Send a message to live servers
 * @param {string} apiKey
 * @param {any} message
 * @param {string} topic
 * @param {number} experienceId
**/

module.exports = function (apiKey, message, topic, experienceId) {
    return new Promise(function (resolve, reject) {
        axios.post(`https://apis.roblox.com/messaging-service/v1/universes/${experienceId}/topics/${topic}`, {
            message
        }, {
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {
                //console.log(response.data);
                return resolve (response.data);
            })
            .catch(function (error) {
                console.log(error);
                return reject(error);
            });
    })
};