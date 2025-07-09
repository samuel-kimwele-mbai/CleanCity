# 🐞 Defect Log

This log tracks all known defects identified during testing.

---

## DEF-001

**Title:**  
Pickup Request Not Saved or Reflected on Dashboard

**Detected By:**  
Manual QA

**Date Reported:**  
_2025-07-09_

**Related Test Case(s):**  
[TC-SM-001]

**Environment:**  
- Local React App (`npm start`)
- Browser: Chrome

**Description:**  
When a user schedules a new pickup:
- The request is **not saved** in `localStorage` or any backend.
- The **Dashboard** "Scheduled Pickups"  or count does not update to reflect the new request.

**Steps to Reproduce:**  
1. Go to **Dashboard** — record current pickups count.  
2. Schedule a new pickup via the **Pickup Scheduler** form.  
3. Inspect `localStorage` → no new pickup data.  
4. Return to Dashboard → count unchanged.

**Expected Behavior:**  
- Pickup details should persist in `localStorage` under `scheduledPickups`.
- Dashboard count should update automatically.

**Actual Behavior:**  
- No data saved.
- Dashboard does not change.

**Severity:**  
High — Core functionality is broken.

**Status:**  
Open

**Assigned To:**  
_Samuel Kimwele Mbai_

**Attachments:**  
- Screenshots of storage check & dashboard state.![image](https://github.com/user-attachments/assets/c5412371-2b5b-4fd5-b061-f992bd854ff9)


