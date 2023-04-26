# mobilicis-project
***

This project is a full-stack web application built with Node.js, Express, MongoDB, and React. The purpose of the application is to fetch data from a MongoDB database and display it in a table format on the front-end -- based on certain criterias

***

## Live URL
***
 https://glittering-cobbler-3576ef.netlify.app/
 
*** 

## Getting Started

***

* Clone the repository
* In the root directory, run npm install
* In the server directory, create a .env file with the following environment variables:
* MONGO: the URL for your MongoDB database
* PORT: the port you want the server to run on (default is 8000)
* In the client directory, create a .env file with the following environment variable:
* REACT_APP_API_URL: the URL for your Node.js server (default is http://localhost:8000)

## API Endpoints
***

* GET /api/user/users/bmw-mercedes: Returns an array of users with income lower than $5 USD and have a car of brand "BMW" or "Mercedes"
* GET /api/user/users/male: Returns an array of male users with phone price greater than $10,000
* GET /api/user/users/quotes: Returns an array of users whose last name starts with "M" and has a quote character length greater than 15 and email includes his/her last name
* GET /api/user/users/email: Returns an array of users which have a car of brand "BMW", "Mercedes" or "Audi" and whose email does not include any digit
* GET /api/user/users/cities: Returns an array of top 10 cities which have the highest number of users and their average income

## Technologies
***

* Node.js
* Express
* MongoDB
* React
* Bootstrap  

## Hosted Using
***

* Back-end: render.com
* Front-end: netlify.com
