const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


// const questions = ['what is  your gethub username?', 'what is your favorite color?'];

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();


inquirer
  .prompt({
    questions: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
        console.log('Found profile!', res);
    });
    });




 //make profile background favorite color
    
    // get profile image

    //user location google map link

    //github profile link

    //user blog

    //user bio
    // repository, followers, github stars, number of users following