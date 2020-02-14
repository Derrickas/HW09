const axios = require("axios");
require("dotenv").config();

const api = {
    getUser(username) {
        return axios
            .get(
                `https://api.github.com/user/${username}?client_id=${process.env.CLIENT_ID}&client_seceret=${process.env.CLIENT_SECERET}`
            )
            .catch((err) => {
                console.log("user not found");
                process.exit(1);
            })
    },
    getTotalStars(username) {
        return axios
            .get(
                `https://api.github.com/user/${username}/repos?client_id=${process.env.CLIENT_ID}&client_seceret=${process.env.CLIENT_SECERET}&per_page=100`
            )
            .then(Response => {
                return Response.data.reduce((acc, curr) => {
                    acc += curr.stargazers_count;
                    return acc;
                }, 0);
            });
    }
};

module.exports = api;