# Test Cases for Restful Booker

## TC_001 — Generate token with valid credentials

**Endpoint**: 

```POST /auth```

**Payload**:
```
{
  "username": "admin",
  "password": "password123"
}
```

**Expected Result**
- Status 200
- Returned Token
- Token usable on protected endpoints

---


## TC_002 — Generate token with invalid password

**Expected Result**
Authentication failure. Token not returned.

---

## TC_003 — Create valid reservation

**Endpoint**
```POST /booking```

**Expected Result**
- Status 200
- Booking ID created
- Payload persisted correctly

---

## TC_004 — Create reservation without required fields

Examples:
- firstname missing;
- lastname missing;
- bookingdates missing.

**Expected Result**

- API should reject invalid payload

---

## TC_005 — Check existing reservation

Endpoint

```GET /booking/{id}```

**Expected Result**
- Status 200
- Correct data returned

---

## TC_006 — Check for non-existent reservation

**Expected Result**
- Status 404

---

## TC_007 — Update authenticated reservation

**Endpoint**

```PUT /booking/{id}```

**Expected Result**
- Status 200
- Data updated correctly

---

## TC_008 — Update reservation without authentication

**Expected Result**
- Status 403

---

## TC_009 — Partial Update via PATCH

**Expected Result**
- Partial update without loss of previous data.

---

## TC_010 — Delete authenticated reservation

**Expected Result**
- Status 201
- Reservation removed

---

## TC_011 — Delete reservation without authentication

**Expected Result**
- Status 403