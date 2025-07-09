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
---
# 🐞 Defect Log

This log tracks all known defects identified during testing.

---

## DEF-002

**Title:**  
Missing Top-Level `<h1>` Heading on Blog Page

**Detected By:**  
Manual Accessibility Testing (axe DevTools)

**Date Reported:**  
_2025-07-07_

**Related Test Case(s):**  
[TC-MK-001]

**Environment:**  
- Local React App (`npm start`)  
- Browser: Chrome  
- Tool: axe DevTools v4.10.3

**Description:**  
The `/blog` page does not contain a single, descriptive top-level `<h1>` heading. This violates accessibility standards that require a clear page title for assistive technologies.

Note: Other pages in the application (e.g., Login, Awareness, Admin Panel) do include valid `<h1>` tags — this issue is isolated to the Blog page.

**Steps to Reproduce:**  
1. Start the app locally with `npm start`.  
2. Navigate to `http://localhost:3000/blog`.  
3. Open Chrome DevTools → go to **axe DevTools** tab.  
4. Click **"Analyze"**.  
5. Observe the issue: “Page should contain one `<h1>` heading”.

**Expected Behavior:**  
- The Blog page should include a unique `<h1>` element near the top of its main content section.

**Actual Behavior:**  
- No `<h1>` found; page structure begins with `<h3>` or styled `<div>`s instead.

**Severity:**  
Medium — Affects accessibility and WCAG compliance.

**Status:**  
Open

**Assigned To:**  
_Martin Kimani_

**Attachments:**  
- Screenshot of axe DevTools result panel
- ![image](https://github.com/user-attachments/assets/a19f5671-5d71-475a-9836-b0d589f3b027)
- [WCAG Guideline 1.3.1 – Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)


