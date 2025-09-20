# QA Engineer Assessment - Automation & Manual Testing
## Project Overview
This project automates an **End-to-End (E2E) purchase flow** on the Demo Web Shop website (https://demowebshop.tricentis.com/) using **Playwright** with a **Page Object Model (POM)** structure. It covers **user registration, login, product selection, cart, checkout, and order confirmation** with dynamic test data.
## Tech Stack
- **Language:** JavaScript (Node.js)  
- **Framework:** Playwright  
- **Architecture:** Page Object Model (POM)  
- **Test Data:** Data-driven (dynamic emails, dummy billing/shipping data)  
- **Assertions:** Playwright `expect`
## Folder Structure
project-root/  
├── pages/  
│   ├── RegisterPage.js  
│   ├── LoginPage.js  
│   ├── PLP.js  
│   ├── PDP.js  
│   ├── CartPage.js  
│   ├── CheckoutPage.js  
│   └── DashboardPage.js  
├── test-data/  
│   └── users.js  
├── tests/  
│   └── E2E-Purchase-Flow.spec.js  
├── package.json  
├── playwright.config.js  
└── README.md
## Setup Instructions
1. **Clone the repository**: 
git clone https://github.com/saniyamuskan309-lgtm/QA-Engineer-Assessment-Sofstica.git 
cd Part1-TestAutomation  
2. **Install dependencies**: npm ci , npx playwright install  
3. **Run tests**: npx playwright test  
## Notes
- Ensure **Node.js** is installed (v16 or above recommended).  
- Test data is dynamically generated to avoid duplicate user conflicts.  
