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

## Actual Result  
- No new data is saved in `localStorage`.  
- The dashboard count does **not** update after submission and refresh.

---

## Status  
**FAIL**

---

## Severity  
**High** — Core data persistence and display logic is not functioning.


## Attachments  
- [ ![image](https://github.com/user-attachments/assets/22440435-4e16-449f-bc28-c5dc6a45af73)] Screenshot: `localStorage` after submission (empty).  
- [ ![image](https://github.com/user-attachments/assets/e71753ce-6341-4d36-9a68-a171b977956c)] Screenshot: Dashboard stat before and after submission (unchanged).

---

**Author:** _Samuel Kimwele Mbai_  
**Date:** _2025-07-09_

### Test Case ID: TC-SM-002

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
- The community feed displays the saved post even after page reload.![image](https://github.com/user-attachments/assets/74c91221-af63-4bfa-b473-96258b8bab99)
 
**Tested By:** Samuel Kimwele Mbai

# ✅ Test Case: TC-SM-003

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
   ![image](https://github.com/user-attachments/assets/997c2418-5031-4d86-a47a-ccc5eea8aec3)


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

**Tested by Bridget Ngugi**


