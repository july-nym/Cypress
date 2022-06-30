## Page Object Model Structure

```
.
├── cypress
│   │
│   │
│   ├── integration
│   │   └── e2e-test
│   │        └── e-commerce
│   │             └── e-commerce module
│   │                  └── feature file
│   ├── support
│   │   |
│   │   ├── page-object
│   │   │   ├── common
│   │   │   │   ├── selector
│   │   │   │   ├── mock_cc.js
│   │   │   │   ├── url.js
│   │   │   │   └──utilities.js
│   │   │   │  
│   │   │   ├── deal
│   │   │   │   ├── checkout-page.js
│   │   │   │   ├── detail-page.js
│   │   │   │   ├── landing-page.js
│   │   │   │   ├── product-page.js
│   │   │   │   └── review-page.js
│   │   │   │ 
│   │   │   ├── flight
│   │   │   │   ├── checkout-page.js
│   │   │   │   ├── landing-page.js
│   │   │   │   ├── product-page.js
│   │   │   │   └── review-page.js
│   │   │   │ 
│   │   │   ├── activities
│   │   │   │   ├── checkout-page.js
│   │   │   │   ├── landing-page.js
│   │   │   │   ├── product-page.js
│   │   │   │   └── review-page.js
│   │   │   │ 
│   │   │   ├── accommodation
│   │   │       ├── checkout-page.js
│   │   │       ├── landing-page.js
│   │   │       ├── product-page.js
│   │   │       └── review-page.js
│   │   │    
│   │   │ 
│   │   └── step_definitions
│   │       ├── deal.js
│   │       ├── flight.js
│   │       ├── activities.js
│   │       ├── accommodation.js
│   │       ├── stripe.js
│   │       ├── login-page.js
│   │       ├── humm.js
│   │       └── whitelist.js
│   │
├── cypress.json
├── package.json
```

## Cucumber Chain Execution

- `.feature ==> step_definitions ==> page-object`

## Running

- `cd trav-cypress`
- `yarn install --dev (Install all package dependencies)`
- `npx cypress open`

## About Cypress

- Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.
- **Cypress does not use Selenium** => Most end-to-end testing tools are Selenium-based, which is why they all share the same problems. To make Cypress different, we built a new architecture from the ground up. Whereas Selenium executes remote commands through the network, Cypress runs in the same run-loop as your application.
- **Cypress focuses on doing end-to-end testing REALLY well** => Cypress is not a general automation framework, nor is it a unit testing framework for your back end services. There are already great tools out there that do that. Rather, we specialize in one thing - creating a great experience while you write end to end tests for your web applications.
- **Cypress works on any front-end framework or website** => Cypress tests anything that runs in a web browser. All of the architecture surrounding Cypress is built to handle modern JavaScript frameworks especially well. We have hundreds of projects using the latest React, Angular, Vue, Elm, etc. frameworks. Cypress also works equally well on older server rendered pages or applications.
- **Cypress tests are only written in JavaScript** => While you can compile down to JavaScript from any other language, ultimately the test code is executed inside the browser itself. There are no language or driver bindings - there is and will only ever be just JavaScript.
- **Cypress is for developers and QA engineers** => One of our goals was to make test-driven development a reality for end-to-end testing. Cypress is at its best when you use it as you build your application. We give you the power to code as fast as possible.

## About Cucumber For Javascript

- **Cucumber.js** is a test framework for behavior-driven JavaScript development.
- **Cucumber.js** tests are written in the human-readable Gherkin language and are stored in feature files that have the feature extension js and recognizes features written in Gherkin so you can run Cucumber.
