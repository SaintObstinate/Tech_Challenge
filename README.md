# QA Challenge — UI Testing & API Testing

## Objective

This repository contains the implementation of the QA technical challenge, encompassing:

UI Testing of the Sauce Demo platform
API Testing of the Restful Booker platform

The purpose of this project is to demonstrate:

analytical skills;
critical thinking;
test organization;
professional documentation;
automation;
risk analysis;
identification of improvements;
application of ISTQB best practices.

---

## Project Structure

```Tech_Challenge/
├── README.md
├── ui-testing/
│   ├── test-plan.md
│   ├── test-cases.md
│   ├── bug-report.md
│   ├── risk-analysis.md
│   ├── improvements.md
│   ├── evidences/
│   └── automation/
│       └── playwright
│           └── tests/    
├── api-testing/
│   ├── postman/
│   │   ├── collection.json
│   │   └── environment.json
│   ├── scenarios.md
│   ├── bug-report.md
│   ├── results.md
│   └── evidences/
└── package.json
```

---
## Tools Used

### UI Testing

|Tool|Purpose|
|---|---|
|Playwright | E2E Automation & API Automation|
|Node.js | Automation runtime
|Visual Studio Code |	Development
|Google Chrome | Manual Testing

### API Testing
|Tool|Purpose|
|---|---|
|Postman | API Testing
|Newman | Automated Execution

---

## Project Scope

### UI Testing — Sauce Demo

Implemented Coverage:

Level 1 (Required)
- Login with different users
- Sorting and filtering
- Complete purchase flow
- Removing items from cart
- Navigation between pages
- Logout


### API Testing — Restful Booker

Implemented Coverage:

Level 1 (Required)
- Authentication
- CRUD for bookings
- Required fields
- Error handling
- Applied differentiators
- Organized collection structure
- Response validation
- Negative scenarios
- Environment variables


## Project Installation

**Prerequisites**

Install:

- Node.js
- npm
- Git
- Postman

**Clone the repository**

```bash
git clone https://github.com/SaintObstinate/Tech_Challenge.git
```

**Enter the folder**

```bash
cd Tech_Challenge/
```

**Install dependencies**

```bash
npm install
```

**Install Playwright browsers**

```bash
npx playwright install
```

## How to Run UI Tests

Enter the test directory
```bash
cd ui_testing/automation/playwright
```
Execute the test using
```bash
npx playwright test
```

To show the test report:
```bash
npx playwright show-report 
```

## How to Run API Tests

Enter the test directory
```bash
cd api_testing/automation/playwright
```
Execute the test using
```bash
npx playwright test
```

To show the test report:
```bash
npx playwright show-report 
```