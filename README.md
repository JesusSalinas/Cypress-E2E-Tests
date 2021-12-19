# Cypress-E2E-Tests
## Table of contents
* [Resume](#resume)
* [Pre-requirements](#pre-requirements)
* [Setup](#setup)
* [Dependencies](#dependencies)

## Resume
The main aim of this project is to provide a basic suit configuration of automation tests with Cypress.
## Pre-requirements
* To have installed a node version [managment](https://github.com/nvm-sh/nvm)
* To have installed the ``v16.11.1`` node version or higher
## Setup
* ``$ cd ../repository_folder``
* ``$ git clone https://github.com/JesusSalinas/Cypress-E2E-Tests.git``
* ``$ npm install cypress``
* Create the ``config.beta.json|config.staging.json|config.prod.json`` files base on the ``cypress.json`` file example. These config files are helpful to split the credentials between environments. Furthermore they are neccessary to run the command scripts in your local machine.
* Install all the [Dependencies](#dependencies)
* Finally, you will be able to run any command of ``scripts`` section from the ``package.json`` file. For example: ``$ npm run cy:beta``
## Dependencies
* ``npm install faker ``
* ``npm install eslint-plugin-cypress --save-dev``
