# ✅ Test Case: TC-SM-001

## Title  
Dashboard Stats & Storage Update After Pickup

## Description  

Verify that scheduling a new waste pickup saves the request in `localStorage` and updates the dashboard "Scheduled Pickups" chart or count.

---
## Preconditions  
- User is logged in.  
- Dashboard and Pickup Scheduler pages are accessible.
---
## Test Steps  
1. Navigate to the **Dashboard** page.  
2. Observe and record the current **"Scheduled Pickups"** count.  
3. Go to the **Schedule Pickup** tab and schedule a new pickup.  
4. Open Developer Tools and check `localStorage` for a `scheduledPickups` entry.  
5. Return to the **Dashboard** and refresh the page.
---
## Expected Result  
- A new pickup request is stored in `localStorage` under the key `scheduledPickups`.  
- The **"total requests"** count **increases by one** to reflect the new request.

---

- No new data is saved in `localStorage`.  
- The dashboard count does **not** update after submission and refresh.



---
**Status:** FAIL  
**Severity:** High  
**Author:** Samuel Kimwele Mbai  
**Linked Defect:** 
## Actual Result  



# Test Case: TC-SM-002

**Title:** Submit Community Post and Verify it is Saved

**Description:**  
Ensure that when a user submits a post through the community feed form, the post is saved correctly and persists on page reload.

**Precondition:**  
- User is logged in.  
- User is on the community page.

**Test Steps:**  
1. Navigate to the Community page.  
2. Fill out the post form with a content. ![image](https://github.com/user-attachments/assets/1a234ad5-8d42-48fc-a673-e63e0ed0dccf)
 
3. Then click post.  
4. Reload the page.  
5. Check that the new post appears in the community feed.

**Expected Result:**  
- The new post is saved   
- The community feed displays the saved post even after page reload.
 

**Status:** PASS  
**Severity:** High
**Author:** Samuel Kimwele Mbai  
**Linked Defect:** 
## Actual Result  



#  Test Case: TC-BN-001

## Title  
Feedback Form Should Validate Request ID

## Description  
Verify that the feedback form does not accept random or invalid Request IDs that are not linked to any scheduled pickup. This ensures proper mapping and traceability of feedback to valid user requests.

---

## Preconditions  
- User is on the **Feedback** page (`/feedback`)  
- At least one real pickup request exists in the system (or assume fake data like REQ001)

---

## Test Steps  
1. Navigate to the **Feedback** page.  
2. In the **Request ID** field, enter an invalid ID such as `REQ9999` or `ABC123`.  
3. Fill in the feedback/comment box with any message.  
4. Click the **Submit** button.  
5. Observe whether the system accepts or rejects the form submission.
 


---

## Expected Result  
- The system should reject the submission if the Request ID does not match a valid scheduled pickup.  
- An error message should be displayed (e.g., “Invalid Request ID”).  
- No data should be saved to localStorage or sent to the backend (if applicable).

---

## Actual Result  
- The form **accepts** any input as a Request ID without checking its validity.  
- Feedback is submitted and accepted for fake/non-existent requests.

---

## Status  
**FAIL**

---
# TC-BN-002

**Title:**  
Admin Panel – Cancel Option for Pending Pickups

**Description:**  
Verify that admins can cancel pending pickups from the admin interface.

**Preconditions:**  
- Admin panel accessible  
- At least one pending request available

**Test Steps:**  
1. Open Admin Panel.  
2. Locate "Pending Pickups" list.  
3. Look for a **Cancel** button for each item.

**Expected Result:**  
- Each request has a cancel option.  
- Clicking it removes the request with confirmation.

**Actual Result:**  
- No cancel button shown.  
- No way to manage user requests.

**Status:** FAIL  
**Severity:** High  
**Author:** Bridget Ngugi  
**Linked Defect:** DEF-005

---
**Tested by Bridget Ngugi**

# ✅ TC-MK-001

**Title:**  
Accessibility: Missing `<h1>` on Blog Page

**Description:**  
Ensure every page contains a semantic top-level `<h1>` heading for screen readers and accessibility tools.

**Preconditions:**  
- App running in local dev environment  
- axe DevTools or Lighthouse extension installed

**Test Steps:**  
1. Navigate to `/blog`.  
2. Open DevTools → axe → Click Analyze.  
3. Observe accessibility violations.

**Expected Result:**  
- One `<h1>` heading should be present and descriptive.

**Actual Result:**  
- No `<h1>` element found.

**Status:** FAIL  
**Severity:** Medium  
**Author:** Martin Kimani  
**Linked Defect:** DEF-002

---


# ✅ TC-MK-002

**Title:**  
Input Validation for Long Name and Email Format

**Description:**  
Check that the form enforces limits on name length and proper email formatting.

**Preconditions:**  
- Pickup scheduling form accessible

**Test Steps:**  
1. Paste over 500 characters in the **Name** field.  
2. Enter an invalid email: `john@doe.`  
3. Click Submit.

**Expected Result:**  
- Name field should restrict length or show error.  
- Email field should show format error.

**Actual Result:**  
- Form accepts invalid inputs and submits.

**Status:** FAIL  
**Severity:** Medium  
**Author:** Martin Kimani  
**Linked Defect:** DEF-003

---

**Tested by Martin Kimani**


