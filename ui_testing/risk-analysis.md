# Context

The risk analysis was built based on the validations performed during functional, exploratory, and authentication tests on the Sauce Demo.

## Severity Matrix

|Severity | Definition|
|---|---|
| Critical | Prevents use of core functionality |
| High | Affects critical workflow or important data |
| Medium | Affects user experience but has a workaround |
| Low | Minor visual or operational impact |

---
### RISK-001 — Visual Inconsistency of Products

**Category**

Data Integrity / UX

**Severity**

High

**Probability**

High

**Evidence**

During testing with problem_user, the following were identified:

- swapped images;
- repeated images;
- incorrect association between item and image.

**Impact on Business**

Very high in e-commerce.

It can cause:

- incorrect purchases;
- loss of trust;
- increased cancellations;
- user complaints.

**Technical Impact**

Indicates a possible problem in:

- data binding;
- frontend rendering;
- asset association;
- catalog integrity.

**Recommended Mitigation:**

- Automated catalog validation;
- Automated visual testing;
- Image mapping review;
- Inconsistency monitoring.

---

### RISK-002 — Shopping Cart Consistency Failure

**Category**

Critical Purchase Flow

**Severity**

Critical

**Probability**

Average

**Evidence**

Inconsistencies were observed related to:

- addition;
- removal;
- visual update;
- synchronization of the shopping cart badge.

**Impact on Business**

Extremely high.

It can lead to:

- incorrect orders;
- abandoned purchases;
- financial loss;
- operational failure.

**Technical Impact**

Possible issues in:

- state management;
- frontend/backend synchronization;
- session caching;
- reactive rendering.

**Recommended Mitigation:**
- Continuous E2E testing;
- Automatic cart state validation;
- Implementation of CI/CD automated testing
- Post-deployment regression testing;
- Cart event monitoring.

---

### RISK-003 — Session and Logout

**Category**

Security / Session

**Severity**

High

**Probability**

Low

**Evidence**

Logout and return navigation flows were validated for risk due to the criticality of the session.

**Business Impact**

It may cause:

- unauthorized access;
- data exposure;
- security breach.

**Technical Impact**

Possible issues with:

- token invalidation;
- browser cache;
- session persistence.

**Recommended Mitigation:**
- Server-side invalidation;
- Route protection;
- Security testing;
- Proper session sanitization.