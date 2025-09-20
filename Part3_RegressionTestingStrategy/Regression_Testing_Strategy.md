# Regression Testing Strategy (ECommerce Application )

## Objective :

The goal of regresssion testing is to make sure that new changes, bug fixes or uupdates do not break the existing functionality of the ecommerce application. This ensures that the main features like registration, login, shopping and checkout continue to work correctly

---

## 1. Risk Assessment Matrix:

Wee need to focus on the most important features first such as:

| Feature / Module       |Criticality| Defect Probabi;ity | Impact        | Notes 
|------------------------|-----------|-----------------|----------------|-------
| User Registration      | High      | Medium          | High           | Users cannot sign up without it 
| Login                 | High      | Medium          | High           | Critical for access 
|  PLP                  | Medium    | Medium          | Medium         | Users need to find products easily 
| PDP & Cart             |  High      | High            | High           | Main purchase flow 
| Checkout               | High      | High            | High           | Core revenue feature 
| Order Confirmation     |  Medium    | Low             | Medium         | Confirms purchase success 
|  Dashboard             | Low       | Medium          | Low            | Additional info for user 
| Cross-browser Support  | Medium    | Medium          | Medium         | Works on different browsers 

**Analysis:** Focus testing on HIGH RISKK AREAS like registration, login, cart, checkout and payment. Medium-risk areas are product search, PDP and order confirmation

---

## 2. Test Selection Strategy

### Smoke Test Suite
These are the must-run tests for every new build:

- Register new user (positive scenario)  
- Login with valid credentials  
- Search for a product  
- Add product to cart  
- Checkout with valid payment  
- Confirm order successfully  

### Full Regression vs Targeted Regression
- **Full Regression:** Run all tests after major releases or backend changes
- **Targeted Regression:** Run only tests related to areas that were changed after small updates or bug fixes

### Automation vs Manual
| Feature / Module       | Approach         |
|------------------------|----------------|
| Registration & Login    | Automated       |
| Product Search & PLP   | Automated       |
| PDP & Cart              | Automated       |
| Checkout & Payment     | Automated       |
| Manual Exploratory    | Manual testing  |
| Accessibility & Edge Cases | Manual testing |

---

## 3. Execution Framework

### Test Case Prioritization
1. **Critical paths:** Checkout, payment, registrationn
2. **High-risk features:** Cart, product selection, logiin  
3. **Medium-risk features:** Order confirmation, dashboard  

### Regression Suite Maintenance
- Review the automated tests every month
- Update test data when new products are added
- Remove old or redundant test cases to keep the suite clean

### Execution Timeline Recommendations
- Smoke tests: Daily after each build  
- Full regression: Weekly or after major releases  
- Targeted regression: After small updates or bug fixes  

---

