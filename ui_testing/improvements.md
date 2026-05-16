# Suggestions for Improvement — Sauce Demo

## Context

The improvements below were identified based on validations performed during functional, exploratory, and risk tests executed on the Sauce Demo.

---
## 01 - Implement Visual Integrity Validation of Products

**Identified Problem**

Inconsistencies were found between:

- product name;
- displayed image;
- item details.

**Recommended Improvement**

Implement automated validations to ensure:

- match between product and image;
- uniqueness of images;
- integrity of the catalog.

---

## 02 - Improve Shopping Cart State Management

**Identified Problem**

The shopping cart flow showed signs of:

- visual desynchronization;
- inconsistency after removal;
- possible state discrepancy.

**Recommended Improvement**

Review shopping cart state management.

---
## 03 - Add Visual Regression Tests

**Identified Problem**

Most of the bugs found are visual and could go unnoticed in purely functional tests.

**Recommended Improvement**

Add an automated visual regression pipeline.

---
## 04 - Improve Navigation Robustness

**Identified Problem**

Inconsistencies were observed during:

- page returns;
- navigation between details;
- use of the back button.

**Recommended Improvement**

Review:

- Route management;
- State persistence;
- UI re-rendering.

---
## 05 - Implement a Complete End-to-End Automation Strategy

**Identified Problem**

Critical scenarios require continuous validation to avoid regressions.

**Recommended Improvement**

Expand end-to-end automation to cover:

- authentication;
- cart;
- checkout;
- sorting;
- navigation;
- logout.