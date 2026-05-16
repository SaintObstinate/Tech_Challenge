# API Testing — Restful Booker

The API validated was Restful Booker, a REST API for reservations with authentication and CRUD operations.

## Validated Scope

### Authentication
- Token generation;
- Invalid credentials;
- Required authentication;
- Authorization.
### CRUD of Reservations
- Creation;
- Query;
- Update;
- Deletion.
### Validation of Required Fields
- Incomplete payload;
- Invalid types;
- Missing fields.


## Validated Scenarios
|Coverage | Area |
|---|---|
|Auth|Positive and Negative
|Create Booking | Valid and Invalid Payload
|Get Booking| Individual and List Inquiry
|Update Booking|  Full PUT
|Partial Update| Patch
|Delete Booking | Authenticated Deletion
|Error Handling|  400, 403, 404
|Data Validation| Required Fields
|Security| Token and Authorization