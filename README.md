## ORM E-commerce Back End 

  ## Table of Contents
  * [Project Story](#projectstory)
  * [Criteria](#criteria)
  * [Installation](#installation)
  * [Project milestones](#projectmilestones)
  * [Demo](#demo)

## Project story
A manager at an internet retail company wants a back end for my e-commerce website that uses the latest technologies
so that their company can compete with other e-commerce companies

## Criteria

With a functional Express.js API when I add my database name, MySQL username, and MySQL password to an environment variable file then I am able to connect to a database using Sequelize

When I enter schema and seed commands then a development database is created and is seeded with test data
When I enter the command to invoke the application, then my server is started and the Sequelize models are synced to the MySQL database
When I open API GET routes in Insomnia Core for categories, products, or tags, then the data for each of these routes is displayed in a formatted JSON
When I test API POST, PUT, and DELETE routes in Insomnia Core,  I am able to successfully create, update, and delete data in my database

## Installation

In the CLI run npm i
Launch mysql -u root -p
Run seeds file
Start server

## Project milestones

Assemble core folders and files and start first Git push
npm install, dotenv, express, mysql2, sequelize and nodemon set up.
The server was configured for sequilize
Set up models/datatypes
Insomnia test: 'wrong route' - port confirmed listening.
Set up model import relationships 
Continue working on the api routes, most are working
Continue to troubelshoot.

## Demo

![Init-demo](./demogif/13-01-init.gif)
![Product Insomnia and terminal demo](./demogif/13-02-products-demo.gif)
![Categories Insomnia and terminal demo](./demogif/13-03-categories-demo.gif)
![Tags](./demogif/13-04-tags-demo.gif)




