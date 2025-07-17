# 🐞 Defect Log

This log tracks all known defects identified during testing.

---

# DEF-001: System allows scheduling pickups for past dates

**Related Test Case:** TC-SM-004  
**Functional Requirement Covered:** FR-013 — *System must reject pickup scheduling for past dates*  
**Environment:** Localhost (`http://localhost:3000/`) — Chrome  
**Reported By:** @samuel-kimwele-mbai  
**Priority:** Medium  
**Severity:** Major  

---

## Description

When a user attempts to schedule a waste pickup for a date in the past (e.g., `2025-07-10`), the system **does not display an error message** and **saves the request**, which violates the expected input validation.

---

## Steps to Reproduce

1. Open the CleanCity app in Chrome (`http://localhost:3000/`).
2. Log in with:
   - **Email:** `user1@test.com`
   - **Password:** `Test123!`
3. Navigate to the **Scheduling page**.
4. Set the pickup date to a **past date** (`2025-07-10`).
5. Click the **Submit** button.
6. Observe the behavior and inspect `localStorage`.

---

## Expected Result

- An error message: **“Cannot schedule past date”** must appear.
- No pickup schedule should be saved in `localStorage`.

---

## Actual Result

- No error message is displayed.
- Past date is accepted and the pickup request is stored.

---

## Impact

Accepting invalid past dates can lead to data inaccuracies, confusion for admin users, and misuse of scheduling resources.

---

## Attachments

<img width="1217" height="882" alt="image" src="https://github.com/user-attachments/assets/3889f2f1-4bc5-4519-a046-0d527bcb0c01" />


---

## Proposed Fix

- Add client-side validation to ensure selected date is **today or later**.
- Block form submission if a past date is selected.
- Display a user-friendly validation error: **“Cannot schedule past date”**.
- Ensure the invalid data does not get saved in `localStorage`.

---

## Status

- Logged as **DEF-001**
- Linked to **TC-SM-004**

## DEF-001
**Title:**  
Pickup Request Not Saved or Reflected on Dashboard

**Detected By:**  
Manual QA

**Date Reported:**  
_2025-07-09_

**Related Test Case(s):**  
[TC-SM-004, TC-MT-006]

**Environment:**  
- Local React App (`npm start`)
- Browser: Chrome

**Description:**  
When a user schedules a new pickup:
- The request is **not saved** in `localStorage` or any backend.
- The **Dashboard** "Scheduled Pickups" or count does not update to reflect the new request.

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
- Screenshots of storage check & dashboard state.
- ![image](https://github.com/user-attachments/assets/c5412371-2b5b-4fd5-b061-f992bd854ff9)

---

## DEF-002
**Title:**  
Missing Top-Level `<h1>` Heading on Blog Page

**Detected By:**  
Manual Accessibility Testing (axe DevTools)

**Date Reported:**  
_2025-07-07_

**Related Test Case(s):**  
[TC-MT-008]

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

---

## DEF-003
**Title:**  
Form Accepts Overly Long Inputs and Invalid Email Without Proper Validation

**Detected By:**  
Manual Edge Case Testing

**Date Reported:**  
_2025-07-07_

**Related Test Case(s):**  
[TC-MT-003]

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
- ![image](https://github.com/user-attachments/assets/45797129-0750-49f5-9aa2-c2403e7930de)

---

## DEF-004
**Title:**  
Feedback Form Accepts Any Request ID Without Validation

**Detected By:**  
Manual QA – Functional Testing

**Date Reported:**  
_2025-07-09_

**Related Test Case(s):**  
[TC-BN-006]

**Environment:**  
- Local React App (`npm start`)
- Browser: Chrome
- Page: Feedback (`/feedback`)

**Description:**  
The Feedback form allows users to submit feedback using any text string as a Request ID — even if it does not match an existing or valid pickup request. This leads to data inconsistency and undermines traceability.

**Steps to Reproduce:**  
1. Navigate to the Feedback page (`/feedback`)
2. In the **Request ID** field, enter a made-up value (e.g., `REQ9999`)
3. Type a comment in the **Feedback** field
4. Click **Submit**
5. Observe the result

**Expected Behavior:**  
- The app should **validate** the entered Request ID against existing requests
- An error message should appear if the ID is invalid or unrecognized
- Optionally, the Request ID should be **autofilled or selected** from a dropdown list of real requests

**Actual Behavior:**  
- The form **accepts any input** in the Request ID field
- Feedback is **submitted even for non-existent IDs**
- No validation or warning is triggered

**Severity:**  
Medium — affects data accuracy and backend processing of feedback

**Status:**  
Open

**Assigned To:**  
_Bridget Ngugi_

**Attachments:**  
- ![image](https://github.com/user-attachments/assets/5a6b7ff0-e0a2-44d9-b859-65e76e1551db)

---

## DEF-005
**Title:**  
Missing “Cancel” Button in Admin Panel for Pending Pickups

**Detected By:**  
Manual Functional Testing

**Date Reported:**  
_2025-07-07_

**Related Test Case(s):**  
[TC-BT-005]

**Environment:**  
- Local React App (`npm start`)  
- Browser: Chrome
- Page: Admin Panel

**Description:**  
According to test case TC-BT-005, admins should be able to cancel user pickup requests from the "Pending Pickups" section. However, the current Admin Panel UI does **not include a “Cancel” button**, making it impossible to complete this action.

**Steps to Reproduce:**  
1. Log in as Admin (`http://localhost:3000/admin`)  
2. Navigate to the **Admin Panel** → **Pending Pickups**  
3. Observe that no “Cancel” option is present for any listed user request

**Expected Behavior:**  
- Each request in "Pending Pickups" should include a visible **"Cancel" button**  
- On clicking "Cancel", the request should be removed from the list and show a **confirmation alert/message**

**Actual Behavior:**  
- No "Cancel" buttons are present  
- No UI mechanism to remove or manage pickup requests as an admin

**Severity:**  
High — Admin functionality is incomplete and does not support request management

**Status:**  
Open

**Assigned To:**  
_Bridget Ngugi_

**Attachments:**  
- Screenshot of Admin Panel showing missing Cancel buttons  
- ![image](https://github.com/user-attachments/assets/a39bde06-ccd4-4908-a881-e06a171bbdec)

---

## DEF-006
**Title:**  
Weak Passwords Are Accepted During Registration Without Validation

**Detected By:**  
Manual QA

**Date Reported:**  
_2025-07-15_

**Related Test Case(s):**  
[TC-MT-002]

**Environment:**  
- Local React App (`npm start`)  
- Browser: Chrome  
- Page: Registration (`/register`)

**Description:**  
The registration form accepts passwords that do not meet the required security criteria (8+ characters, at least one uppercase letter, and one number). This leads to weak account protection.

**Steps to Reproduce:**  
1. Open the registration form (`http://localhost:3000/register`)  
2. Use credentials:  
   - Email: `user1@test.com`  
   - Password: `weak`  
3. Submit the form  
4. Observe behavior  

**Expected Behavior:**  
- Form should display a validation error message:  
  _“Password must be 8+ chars, include uppercase, number”_  
- Registration should fail.

**Actual Behavior:**  
- Form accepted the weak password.  
- User was redirected to the login page.  
- No validation or error message shown.  
- Chrome’s password manager triggered a warning about password security.

**Severity:**  
High — this impacts user security and violates FR-008.

**Status:**  
Open

**Assigned To:**  
_Martin Kimani_

**Attachments:**  
- Screenshot of Chrome warning after password is accepted:
- <img width="407" height="431" alt="image" src="https://github.com/user-attachments/assets/c8ff5b06-d53a-43b4-b949-8ddbf227ee08" />




## DEF-007

**Title:**
Admin Cannot View Pending Pickup Requests in Admin Panel
Description: When logged in as an admin, no pickup requests are visible, preventing request cancellation as required by FR-054. This blocks execution of TC-BT-005.

**Steps to Reproduce:**

- Log in as admin.
- Navigate to Admin Panel.
- Observe that no pickup requests are displayed, despite existing “Pending” requests.

**Expected Result:**
 Admin should see a list of pickup requests with status info, including "Pending" ones.

**Actual Result:**
 No requests are displayed, making cancellation impossible.

**Severity:** 
Medium 

**Environment:**
 CleanCity web app (https://cleancity.example.com/), Chrome

**Evidence**

<img width="800" height="314" alt="Image" src="https://github.com/user-attachments/assets/67992ac4-5677-4a00-86b9-2223c89afef7" />


## DEF-008
## 🐞 DEF-008 — Registration Does Not Store User in `localStorage`

**ID:** DEF-008  
**Title:** New user registration does not persist user data in localStorage  
**Related Test Case:** TC-SM-001  
**Reported By:** @samuel-kimwele-mbai  
**Environment:** CleanCity Web App, Chrome Browser  
**Severity:** Medium  
**Priority:** High  

---

### 📄 Description
When a new user registers with valid credentials, the application displays a success message on the UI. However, no new user record is actually saved in `localStorage`. Only the hardcoded demo accounts (`user@cleancity.com` and `admin@cleancity.com`) remain available. This prevents real user registration from working as intended.

---

### ✅ **Steps to Reproduce**
1. Open the CleanCity app (`http://localhost:3000/`).
2. Navigate to the **Register** page.
3. Enter a valid email (`user1@test.com`) and password (`Test123!`).
4. Click **Register**.
5. Observe the success message.
6. Open **Chrome DevTools → Application → Local Storage**.
7. Confirm that no new user data has been stored.

---

### ✔️ **Expected Result**
- A success message **“Registration successful”** appears.
- New user data is added to `localStorage` under `ccUsers`.

### ❌ **Actual Result**
- The success message appears.
- **No new user data** is stored. Only the demo accounts are present.

---

### 📎 **Attachments**
- Screenshots showing `localStorage` before and after registration.
- Related HTML & JS code snippets if needed.

---

### ⚠️ **Impact**
This defect Blocks core authentication functionality.

---

### 🔧 **Suggested Fix**
Add logic in `script.js` to store newly registered users in `localStorage` under the `ccUsers` key:
- Load existing users array (`ccUsers`).
- Append new user.
- Save updated array back to `localStorage`.

---

**Status:** Open 
**Labels:** `bug`, `registration`, `localStorage`, `QA`  
**Assignee:** @samuel-kimwele-mbai  
**Project:** CleanCity QA Testing > To Do



