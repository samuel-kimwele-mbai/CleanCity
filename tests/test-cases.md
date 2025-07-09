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

