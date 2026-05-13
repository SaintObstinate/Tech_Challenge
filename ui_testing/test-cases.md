# Test Cases - Sauce Demo

---

## TC-001 - Successful Login

### Preconditions
- User must be registered in the system
- Login page must be accessible

### Test Steps

| Step | Action |
|---|---|
| 1 | Access login page |
| 2 | Enter valid username |
| 3 | Enter valid password |
| 4 | Click on Login button |

### Expected Result
User should be redirected to the product page successfully.

### Actual Result
User redirected correctly to product page.

### Status
Passed

---

## TC-002 -  Login With Invalid Password

### Preconditions
- User must exist in database

### Test Steps

| Step | Action |
|---|---|
| 1 | Access login page |
| 2 | Enter valid username |
| 3 | Enter invalid password |
| 4 | Click on Login button |

### Expected Result
System should display an error message informing invalid credentials.

### Actual Result
Error message displayed correctly.

### Status
Passed

---


## TC-003 - Login With Nonexistent User

### Preconditions
- User must NOT exist in database

### Test Steps

| Step | Action |
|---|---|
| 1 | Access login page |
| 2 | Enter valid username |
| 3 | Enter invalid password |
| 4 | Click on Login button |

### Expected Result
System should display an error message informing that the username does not match any user in the service.

### Actual Result
Error message displayed correctly.

### Status
Passed

---

## TC-004 - User Locked Out

### Preconditions
- User must exist in database
- User must be locket out of the system

### Test Steps

| Step | Action |
|---|---|
| 1 | Access login page |
| 2 | Enter valid username |
| 3 | Enter valid password |
| 4 | Click on Login button |

### Expected Result
System should display an error message informing that the user is locked out of the system.

### Actual Result
Error message displayed correctly.

### Status
Passed

---

## TC-005 - Login With Empty Inputs

### Preconditions
- User must exist in database

### Test Steps

| Step | Action |
|---|---|
| 1 | Access login page |
| 2 | Enter valid username OR a valid password |
| 3 | Click on Login button |

### Expected Result
System should display an error message informing the inputs are required

### Actual Result
Error message displayed correctly.

### Status
Passed

---

## TC-006 - Logout

### Preconditions
- User must exist in database

### Test Steps

| Step | Action |
|---|---|
| 1 | Access login page |
| 2 | Enter valid username |
| 3 | Enter valid password |
| 4 | Click on Login button |
| 5 | Click on menu side button |
| 4 | Click on Logout|

### Expected Result
System must logout the user and redirect them to the Login Page 

### Actual Result
User logged out correctly.

### Status
Passed

---

## TC-007 - Complete Purchase Flow

### Preconditions
- User must exist in database

### Test Steps

| Step | Action |
|---|---|
| 1 | Access login page |
| 2 | Enter valid username |
| 3 | Enter invalid password |
| 4 | Click on Login button |
| 5 | Click on 'Add to cart' button |
| 6 | Click on the Cart icon button |
| 7 | Click on 'Checkout' button |
| 8 | Enter valid First Name |
| 7 | Enter valid Last Name |
| 8 | Enter valid Zip/Postal Code |
| 9 | Click on 'Continue' button  |
| 10 | Click on 'Finish' button  |

### Expected Result
System should display an error message informing invalid credentials.

### Actual Result
Error message displayed correctly.

### Status
Passed

---

## TC-008 - Remove Products From Cart

### Preconditions
- User must exist in database

### Test Steps

| Step | Action |
|---|---|
| 1 | Access login page |
| 2 | Enter valid username |
| 3 | Enter valid password |
| 4 | Click on Login button |
| 5 | Click on 'Add to cart' button |
| 6 | Click on 'Remove' Button|

### Expected Result
Product must be removed from cart

### Actual Result
Product was removed from cart.

### Status
Passed

---

## TC-009 - Session Persistence After Refresh

### Preconditions
- User must be registered in the system

### Test Steps

| Step | Action |
|---|---|
| 1 | Access login page |
| 2 | Enter valid username |
| 3 | Enter valid password |
| 4 | Click on Login button |
| 5 | Refresh the page |

### Expected Result
User session must remain active

### Actual Result
User remain logged in

### Status
Passed

---