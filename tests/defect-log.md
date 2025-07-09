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

## DEF-003

**Title:**  
Form Accepts Overly Long Inputs and Invalid Email Without Proper Validation

**Detected By:**  
Manual Edge Case Testing

**Date Reported:**  
_2025-07-07_

**Related Test Case(s):**  
[TC-MK-002]

**Environment:**  
- Local React App (`npm start`)  
- Browser: Chrome  
- Page: Pickup Scheduling Form (`/schedule`)

**Description:**  
The form fails to validate excessively long input in the **"Name"** field and does not enforce proper format validation in the **"Email"** field. The only check in place appears to be for the presence of the `@` symbol.

**Steps to Reproduce:**  
1. Go to the Pickup Scheduling form.  
2. In the **Name** field, paste over 500 characters (e.g., lorem ipsum).  
3. In the **Email** field, enter an invalid email like `example@gmail...` (missing domain).  
4. Click **Submit**.  
5. Observe behavior.

**Expected Behavior:**  
- App should **restrict Name input** (e.g., max 100 characters) or show a clear validation error.  
- Email should be validated using a regex or HTML5 pattern (e.g., `user@example.com`) and **show an error message** for invalid formats.

**Actual Behavior:**  
- The form **accepts 500+ characters** in the Name field with no error or truncation.  
- The Email field **accepts invalid formats** like `example@gmail.` without any feedback or warning.  
- The form still submits successfully (depending on implementation).

**Severity:**  
Medium – affects data integrity and user input reliability.

**Status:**  
Open

**Assigned To:**  
_Martin Kimani_

**Attachments:**  
- Screenshot of input fields before and after submission
   ![image](https://github.com/user-attachments/assets/45797129-0750-49f5-9aa2-c2403e7930de) 


