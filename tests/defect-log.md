9# 🐞 Defect Log

This log tracks all known defects identified during testing.

---

## DEF-001: Pickup Request Scheduling and Storage Issues

**Related Test Case(s):** TC-SM-004, TC-MT-006  
**Functional Requirement Covered:** FR-013, FR-027  
**Environment:** Local React App (`http://localhost:3000/`), Chrome  
**Reported By:** @samuel-kimwele-mbai  
**Priority:** High  
**Severity:** High  
**Date Reported:** 2025-07-09  

### Description
When a user schedules a pickup:
- The system allows scheduling for past dates (e.g., `2025-07-10`), violating FR-013.
- The request is not saved in `localStorage` or reflected on the Dashboard, violating FR-027.

### Steps to Reproduce
1. Open the CleanCity app in Chrome (`http://localhost:3000/`).
2. Log in with email: `user1@test.com`, password: `Test123!`.
3. Navigate to the **Scheduling page**.
4. Set pickup date to a past date (`2025-07-10`) and submit.
5. Go to **Dashboard**, record pickups count.
6. Schedule a new pickup via the **Pickup Scheduler** form.
7. Inspect `localStorage` and Dashboard.

### Expected Result
- Past date scheduling shows error: “Cannot schedule past date.”
- Valid pickup details persist in `localStorage` under `scheduledPickups`.
- Dashboard count updates automatically.

### Actual Result
- No error for past dates; request is saved.
- No pickup data saved in `localStorage`.
- Dashboard count unchanged.

### Impact
Accepting past dates and failing to save requests lead to data inaccuracies and broken core functionality.

### Attachments
- Screenshots of storage check and dashboard state.
- <img width="1217" height="882" alt="image" src="https://github.com/user-attachments/assets/c5412371-2b5b-4fd5-b061-f992bd854ff9" />

### Proposed Fix
- Add client-side validation to reject past dates and display error.
- Ensure valid pickup requests are saved in `localStorage` under `scheduledPickups`.
- Update Dashboard to reflect new requests.

### Status
- Open
- Linked to TC-SM-004, TC-MT-006
- Assigned To: Samuel Kimwele Mbai

---

## DEF-002: Missing Top-Level `<h1>` Heading on Blog Page

**Related Test Case(s):** TC-MT-008  
**Functional Requirement Covered:** FR-071  
**Environment:** Local React App (`http://localhost:3000/blog`), Chrome, axe DevTools v4.10.3  
**Reported By:** @Martokim  
**Priority:** Medium  
**Severity:** Medium  
**Date Reported:** 2025-07-07  

### Description
The `/blog` page lacks a descriptive `<h1>` heading, violating WCAG 2.1 AA accessibility standards (FR-071). Other pages (e.g., Login, Admin Panel) have valid `<h1>` tags.

### Steps to Reproduce
1. Start the app (`npm start`).
2. Navigate to `http://localhost:3000/blog`.
3. Open Chrome DevTools, axe DevTools tab, click “Analyze.”
4. Observe issue: “Page should contain one `<h1>` heading.”

### Expected Result
- Blog page includes a unique `<h1>` near the top of main content.

### Actual Result
- No `<h1>`; page uses `<h3>` or styled `<div>`s.

### Impact
Affects accessibility and WCAG compliance, impacting users with assistive technologies.

### Attachments
- Screenshot of axe DevTools result.
- <img width="800" height="314" alt="image" src="https://github.com/user-attachments/assets/a19f5671-5d71-475a-9836-b0d589f3b027" />
- [WCAG Guideline 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

### Proposed Fix
- Add a unique `<h1>` element to the Blog page’s main content.

### Status
- Open
- Linked to TC-MT-008
- Assigned To: Martin Kimani

---

## DEF-003: Form Accepts Overly Long Inputs and Invalid Email

**Related Test Case(s):** TC-MT-003  
**Functional Requirement Covered:** FR-012  
**Environment:** Local React App (`http://localhost:3000/schedule`), Chrome  
**Reported By:** @Martokim  
**Priority:** Medium  
**Severity:** Medium  
**Date Reported:** 2025-07-07  

### Description
The Pickup Scheduling form accepts over 500 characters in the Name field and invalid email formats (e.g., `example@gmail...`), with only `@` symbol validation.

### Steps to Reproduce
1. Navigate to Pickup Scheduling form.
2. Enter 500+ characters in Name field (e.g., lorem ipsum).
3. Enter invalid email (e.g., `example@gmail...`).
4. Click Submit.

### Expected Result
- Name field restricted to ~100 characters with validation error.
- Email validated with regex/HTML5 pattern, showing error for invalid formats.

### Actual Result
- Accepts 500+ characters in Name.
- Accepts invalid emails without feedback.
- Form submits successfully.

### Impact
Affects data integrity and user input reliability.

### Attachments
- Screenshot of input fields.
- <img width="800" height="314" alt="image" src="https://github.com/user-attachments/assets/45797129-0750-49f5-9aa2-c2403e7930de" />

### Proposed Fix
- Add character limit validation for Name field.
- Implement regex/HTML5 email validation with error messages.

### Status
- Open
- Linked to TC-MT-003
- Assigned To: Martin Kimani

---

## DEF-004: Feedback Form Accepts Any Request ID

**Related Test Case(s):** TC-BT-006  
**Functional Requirement Covered:** FR-057  
**Environment:** Local React App (`http://localhost:3000/feedback`), Chrome  
**Reported By:** @Bbrnn  
**Priority:** Medium  
**Severity:** Medium  
**Date Reported:** 2025-07-09  

### Description
The Feedback form accepts any Request ID, even invalid ones (e.g., `REQ9999`), leading to data inconsistency.

### Steps to Reproduce
1. Navigate to Feedback page (`/feedback`).
2. Enter invalid Request ID (e.g., `REQ9999`).
3. Add comment and submit.
4. Observe result.

### Expected Result
- Validates Request ID against existing requests.
- Shows error for invalid IDs.

### Actual Result
- Accepts any Request ID.
- Submits feedback without validation.

### Impact
Affects data accuracy and traceability in feedback processing.

### Attachments
- <img width="800" height="314" alt="image" src="https://github.com/user-attachments/assets/5a6b7ff0-e0a2-44d9-b859-65e76e1551db" />

### Proposed Fix
- Validate Request ID against existing requests.
- Add error message or autofill/dropdown for valid IDs.

### Status
- Open
- Linked to TC-BT-006
- Assigned To: Bridget Ngugi

---

## DEF-005: Missing “Cancel” Button in Admin Panel

**Related Test Case(s):** TC-BT-005  
**Functional Requirement Covered:** FR-054  
**Environment:** Local React App (`http://localhost:3000/admin`), Chrome  
**Reported By:** @Bbrnn  
**Priority:** High  
**Severity:** High  
**Date Reported:** 2025-07-07  

### Description
The Admin Panel lacks a “Cancel” button for Pending Pickups, preventing admins from canceling requests (FR-054).

### Steps to Reproduce
1. Log in as Admin (`http://localhost:3000/admin`).
2. Navigate to Admin Panel → Pending Pickups.
3. Observe no “Cancel” option for requests.

### Expected Result
- Each Pending Pickup has a visible “Cancel” button.
- Clicking “Cancel” removes request and shows confirmation.

### Actual Result
- No “Cancel” buttons present.
- No mechanism to manage requests.

### Impact
Blocks admin functionality for request management.

### Attachments
- Screenshot of Admin Panel.
- <img width="800" height="314" alt="image" src="https://github.com/user-attachments/assets/a39bde06-ccd4-4908-a881-e06a171bbdec" />

### Proposed Fix
- Add “Cancel” button to Pending Pickups UI.
- Implement cancellation logic with confirmation alert.

### Status
- Open
- Linked to TC-BT-005
- Assigned To: Bridget Ngugi

---

## DEF-006: Weak Passwords Accepted During Registration

**Related Test Case(s):** TC-MT-002  
**Functional Requirement Covered:** FR-008  
**Environment:** Local React App (`http://localhost:3000/register`), Chrome  
**Reported By:** @Martokim  
**Priority:** High  
**Severity:** High  
**Date Reported:** 2025-07-15  

### Description
The registration form accepts weak passwords (e.g., `weak`) that don’t meet FR-008 criteria (8+ characters, uppercase, number).

### Steps to Reproduce
1. Open registration form (`http://localhost:3000/register`).
2. Enter email: `user1@test.com`, password: `weak`.
3. Submit form.

### Expected Result
- Error: “Password must be 8+ chars, include uppercase, number.”
- Registration fails.

### Actual Result
- Accepts weak password.
- Redirects to login page.
- No error shown.

### Impact
Compromises user security, violating FR-008.

### Attachments
- Screenshot of Chrome warning.
- <img width="407" height="431" alt="image" src="https://github.com/user-attachments/assets/c8ff5b06-d53a-43b4-b949-8ddbf227ee08" />

### Proposed Fix
- Add password validation for length, uppercase, and number.
- Display error and block submission for weak passwords.

### Status
- Open
- Linked to TC-MT-002
- Assigned To: Martin Kimani

---

## DEF-007: Admin Cannot View Pending Pickup Requests

**Related Test Case(s):** TC-BT-005  
**Functional Requirement Covered:** FR-054  
**Environment:** CleanCity web app (`https://cleancity.example.com/`), Chrome  
**Reported By:** @Bbrnn  
**Priority:** High  
**Severity:** Blocker  
**Date Reported:** 2025-07-17  

### Description
No pickup requests are visible in the Admin Panel, preventing cancellation (FR-054), blocking TC-BT-005.

### Steps to Reproduce
1. Log in as admin (`https://cleancity.example.com/admin`).
2. Navigate to Admin Panel → Pending Pickups.
3. Observe no requests displayed despite existing “Pending” requests.

### Expected Result
- List of pickup requests with status info, including “Pending.”

### Actual Result
- No requests displayed, making cancellation impossible.

### Impact
Blocks core admin functionality.

### Attachments
- <img width="800" height="314" alt="image" src="https://github.com/user-attachments/assets/67992ac4-5677-4a00-86b9-2223c89afef7" />

### Proposed Fix
- Fix data retrieval/display logic for Admin Panel.
- Ensure Pending Pickups are fetched and rendered.

### Status
- Open
- Linked to TC-BT-005
- Assigned To: Bridget Ngugi

---

## DEF-008: Registration Does Not Store User in `localStorage`

**Related Test Case(s):** TC-SM-001  
**Functional Requirement Covered:** FR-001  
**Environment:** CleanCity Web App (`http://localhost:3000/`), Chrome  
**Reported By:** @samuel-kimwele-mbai  
**Priority:** High  
**Severity:** Medium  
**Date Reported:** 2025-07-17  

### Description
New user registration shows a success message but does not save user data in `localStorage`. Only hardcoded demo accounts (`user@cleancity.com`, `admin@cleancity.com`) are available.

### Steps to Reproduce
1. Navigate to Register page (`http://localhost:3000/`).
2. Enter email: `user1@test.com`, password: `Test123!`.
3. Click Register.
4. Observe success message.
5. Check `localStorage` in Chrome DevTools.

### Expected Result
- Success message: “Registration successful.”
- User data added to `localStorage` under `ccUsers`.

### Actual Result
- Success message appears.
- No user data stored in `localStorage`.

### Impact
Blocks core authentication functionality.

### Attachments
- [Screenshots pending]

### Proposed Fix
- Add logic in `script.js` to append new user to `ccUsers` in `localStorage`.

### Status
- Open
- Linked to TC-SM-001
- Assigned To: Samuel Kimwele Mbai



#DEF-009
**Title:** Dashboard displays incorrect "Total Requests"  
**Module:** Dashboard  
**Severity:** High  
**Priority:** Medium  
**Reported By:** Bridget Ngugi  
**Date Reported:** 2025-07-16 
**Related Test case:**TC-BT-001
**Environment:**  
- URL: https://cleancity.example.com  
- Browser: Chrome (latest)  
- OS:  Windows 11
- User: user1@test.com  

---

### ✅ Description
After login, the Dashboard shows **"Total Requests" = 0**, but **localStorage shows 4**. This causes incorrect stats to be displayed to the user.

---

### 🔁 Steps to Reproduce
1. Log in with user1@test.com / Test123!  
2. Navigate to the Dashboard.  
3. Note the "Total Requests" value = 0.  
4. Open DevTools → Application → Local Storage.  
5. Confirm "Total Requests" = 4.

---

### 📌 Expected Result
Dashboard should display **"Total Requests" = 4**, matching the localStorage value.

### ❌ Actual Result
Dashboard displays **"Total Requests" = 0**, creating a mismatch.

---
### Evidence

<img width="860" height="366" alt="Image" src="https://github.com/user-attachments/assets/40b498f7-7c46-4b23-bc02-89fec04c4c85" />

<img width="707" height="285" alt="Image" src="https://github.com/user-attachments/assets/18d1b02b-fbd6-4620-b0c0-c7929ce87a74" />

---

### 💡 Suggested Fix
Review the frontend logic fetching and displaying stats. Ensure it's correctly syncing with the data source (localStorage or API).
