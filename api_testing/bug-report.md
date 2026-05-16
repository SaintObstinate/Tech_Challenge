# Bug Report for Restful Booker

## BUG_001 — API accepts incomplete payload

**Severity**

High

**Type**

Data Validation

**Endpoint**
```POST /booking```

**Request**
```json
{
  "totalprice": 100,
  "depositpaid": true
}
```

**Description**

The API allows creating reservations even when essential payload fields are missing.

During testing, the creation was accepted even after removing important attributes such as:

- firstname
- lastname
- bookingdates

**Impact**
- Data inconsistency;
- Low integrity;
- Invalid records.

**Expected Result**

The API should:

- reject invalid payload;
- return a 400 Bad Request;
- report missing required fields.

---

## BUG_002 — API accepts invalid data types in critical fields

**Severity**

High

**Priority**

High

**Endpoint**
```POST /booking```

**Request**
```json
{
  "firstname": "Bruno",
  "lastname": "QA",
  "totalprice": "abc",
  "depositpaid": "teste",
  "bookingdates": {
    "checkin": "2026-05-16",
    "checkout": "2026-05-20"
  }
}
```

**Description**

The API accepts incompatible data types for critical attributes.

Examples identified:
- string in a numeric field;
- text in a boolean field.

**Expected Result**

The API should:

- validate schema;
- reject invalid types;
- return error 400.

---

## BUG_003 — Update endpoint allows full overwrite without minimum validation

**Severity**

High

**Priority**

High

**Endpoint**
``PUT /booking/{id}``

**Request**
```json
{
  "firstname": "Teste"
}
```

**Steps to reproduce**
1. Create a valid reservation
2. Execute PUT with reduced payload

**Expected Result**

PUT should:

- require complete payload;
- validate minimum integrity;
- reject incomplete update.

## BUG_004 — Text fields accept empty values

**Severity**

Medium

**Priority**

High

**Endpoint**
``POST /booking``

**Request**
```json
{
  "firstname": "",
  "lastname": "",
  "totalprice": 100,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-05-16",
    "checkout": "2026-05-20"
  }
}
```

**Description**

Essential fields such as:
- firstname;
- lastname;

accept empty strings.

**Expected Result**

The API should validate:

- minimum content;
- required fields filled.