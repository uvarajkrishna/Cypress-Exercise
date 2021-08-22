
# Cypress-Exercise 
[![Cypress Tests using Cypress Docker Image](https://github.com/uvarajkrishna/Cypress-Exercise/actions/workflows/main.yml/badge.svg)](https://github.com/uvarajkrishna/Cypress-Exercise/actions/workflows/main.yml)

## Sample exercise project using Cypress js for automating a web application.

## Decription
The project is developed to demonstrate test automation of below scenario using Cypressjs. The scenario is automated, cypress is configured to generate junit reports along side spec reports and GitHub action is [defined in .github/workflows/main.yml](.github/workflows/main.yml) to execute test on a cypress containers and publish the junit results from the execution to GitHub actions. 

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

To run in local
```
cd <projectlocation>
npm install  
npm test
```
To run via GitHub Actions, goto [Actions](/actions/workflows/main.yml) and click RunWorkflow

