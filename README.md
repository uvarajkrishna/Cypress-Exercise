
# Cypress-Exercise 
[![Cypress Tests using Cypress Docker Image](https://github.com/uvarajkrishna/Cypress-Exercise/actions/workflows/main.yml/badge.svg)](https://github.com/uvarajkrishna/Cypress-Exercise/actions/workflows/main.yml)

## Sample exercise project using Cypress js for automating a web application.

### Scenario

Open Iodine Software website  
Go to careers page  
Open SDET Job  
Click apply job  
Fill in the application details  
Cancel the application  
Validate the Job title in returning page  

### Artifacts

Test - [iodine-careers.spec.js](cypress/integration/iodine-careers.spec.js)  
Test Data - [applicants.json](cypress/fixtures/applicants.json)

### Usage

To run in local, clone the project and execute
```
npm install  
npm test
```
To run via GitHub Actions, goto [Actions](actions/workflows/main.yml) and click RunWorkflow

