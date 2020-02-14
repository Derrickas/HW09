const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const api = require("./api");
const generateHTML = require("./generateHTML");



// function writeToFile(fileName, data) {

// }


// init();

//asks user prompted questions

function init() {
  inquirer
    .prompt([{
        message: "Enter your GitHub username:",
        name: "username"
      },
      {
        type: 'list',
        message: 'what is your favorite color?',
        name: 'color',
        choices: ['red', 'green', 'pink', 'blue']
      }
    ])
    .then(({
      username,
      color
    }) => {
      api
        .getUser(username)
        .then(Response => {
          api.getTotalStars(username).then(stars => {
            return generateHTML({
              stars,
              color,
              ...Response.data
            })
          })
        })
    });
}

init();





//make profile background favorite color

// get profile image

//user location google map link

//github profile link

//user blog

//user bio
// repository, followers, github stars, number of users following