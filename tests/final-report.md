## 🧪 CleanCity QA Final Test Report

### 📋 Project Summary

**Application Name**: CleanCity – Waste Pickup Scheduler<br>
**Testing Period**: July 7 – July 15, 2025<br>
**Tested By**: Samuel Kimwele Mbai, Martin Kimani, Bridget Ngugi<br>
**Objective**: Ensure functional integrity, usability, accessibility, performance, and compatibility of the CleanCity web application, covering authentication, pickup request form, scheduling, dashboard, community feed, admin panel, and navigation flows.<br>

---

### ✅ Test Coverage Overview
| Feature                     | Status | Functional Req.         | Notes                                                                 |
|-----------------------------|--------|------------------------|----------------------------------------------------------------------|
| User Registration           | Fail   | FR-001                 | Registration fails to store user in `localStorage` (DEF-008).         |
| Account Verification Email  | Fail  | FR-002                 | MFA not implemented                                       |
| Login (Valid Credentials)   | Pass   | FR-004–FR-005         | Jest script verified login and session storage.                      |
| Login (Invalid Email)       | Pass   | FR-004                 | Invalid email format rejected correctly.                             |
| Password Requirements       | Fail   | FR-008                 | Weak passwords accepted without validation (DEF-006).                |
| Pickup Form Submission      | Pass   | FR-012                 | Valid data submission successful.                                    |
| Pickup Form Validation      | Pass   | FR-012, FR-015         | Empty fields and invalid waste types rejected correctly.             |
| Scheduling (Future Date)    | Pass   | FR-013                 | Jest script verified future date scheduling.                         |
| Scheduling (Past Date)      | Fail   | FR-013                 | Past dates accepted, no `localStorage` update (DEF-001).             |
| Dashboard Stats             | Pass   | FR-023                 | Stats displayed correctly.                                           |
| Dashboard Filter            | Pass   | FR-025                 | Status filter applied correctly.                                     |
| Dashboard Sorting           | Pass   | FR-027                 | Date sorting functional.                                             |
| Dashboard Storage Overflow  | Fail   | FR-027                 | `localStorage` limit exceeded (DEF-001).                             |
| Community Post Submission   | Pass   | FR-041–FR-043         | Posts saved and displayed in feed.                                   |
| Community XSS Protection    | Pass   | FR-042                 | XSS payloads sanitized correctly.                                    |
| Admin Status Update         | Pass   | FR-053                 | Request status updated in `localStorage`.                            |
| Admin Request Cancellation  | Fail   | FR-054                 | No Cancel button (DEF-005), no requests displayed (DEF-007).         |
| Admin Data Display          | Pass   | FR-057                 | All requests displayed correctly.                                    |
| Feedback Form Validation    | Pass   | FR-057                 | Invalid Request IDs accepted (DEF-004).                              |
| WCAG 2.1 AA Compliance      | Fail   | FR-071                 | Missing `<h1>` on Blog page (DEF-002).                               |
| Keyboard Navigation         | Pass   | FR-072                 | All controls accessible via keyboard.                               |
| Intuitive Navigation        | Pass   | FR-075                 | Features accessible in <3 clicks.                                    |
| Page Load Time              | Pass   | FR-084                 | Dashboard loads in <3s.                                              |
| Cross-Browser Compatibility | Pass   | FR-086                 | Consistent UI/functionality across Chrome, Firefox, Safari, Edge.    |

**Notes**: 
- Total: 24 test cases (Samuel: 5, Martin: 10, Bridget: 9).<br>
- Status: 16 Pass, 7 Fail, 1 To Do.<br>
- FR Coverage: 100% for FR-001–FR-002, FR-004–FR-005, FR-008, FR-012–FR-013, FR-015, FR-023, FR-025, FR-027, FR-041–FR-043, FR-053–FR-054, FR-057, FR-071–FR-072, FR-075, FR-084, FR-086.<br>

Tools used: Jest, Chrome DevTools, axe DevTools, Visual Studio Code, Git, GitHub<br>

---

### 🧪 Automated Test

**Test Script Path**: `tests/jest/auth.test.js`, `tests/jest/scheduling.test.js`<br>
**Description**:
- Jest scripts for TC-SM-002 (login with valid credentials) and TC-SM-003 (scheduling with future date).<br>
- Simulates login, verifies session in `localStorage`, and tests scheduling with valid dates.<br>
- Uses mocked `localStorage` and React components.<br>

**Execution Result**:
- Both scripts passed successfully.<br>
- No delays observed in local environment (`http://localhost:3000`).<br>

---

### 📂 Defect Log Summary

| Defect ID | Title                                       | Test Case(s)       | Severity | Priority | Status | Logged By           |
|-----------|---------------------------------------------|--------------------|----------|----------|--------|---------------------|
| DEF-001   | Pickup Request Scheduling and Storage Issues | TC-SM-004, TC-MT-006 | High     | High     | Open   | Samuel Kimwele Mbai |
| DEF-002   | Missing `<h1>` Heading on Blog Page         | TC-MT-008          | Medium   | Medium   | Open   | Martin Kimani       |
| DEF-003   | Form Accepts Overly Long Inputs and Invalid Email | TC-MT-003     | Medium   | Medium   | Open   | Martin Kimani       |
| DEF-004   | Feedback Form Accepts Any Request ID         | TC-BT-006          | Medium   | Medium   | Open   | Bridget Ngugi       |
| DEF-005   | Missing “Cancel” Button in Admin Panel       | TC-BT-005          | High     | High     | Open   | Bridget Ngugi       |
| DEF-006   | Weak Passwords Accepted During Registration  | TC-MT-002          | High     | High     | Open   | Martin Kimani       |
| DEF-007   | Admin Cannot View Pending Pickup Requests    | TC-BT-005          | Blocker  | High     | Open   | Bridget Ngugi       |
| DEF-008   | Registration Does Not Store User in `localStorage` | TC-SM-001    | Medium   | High     | Open   | Samuel Kimwele Mbai |

**Notes**: See `defect-log.md` for full details and screenshots.<br>

---

### 🔚 Final Notes

- System functional on `http://localhost:3000` for most features, but critical issues in admin panel (DEF-007, DEF-005), authentication (DEF-006, DEF-008), and scheduling (DEF-001) require fixes.<br>
- Eight defects logged, targeting 15 per `faq.md` (3 critical/major, 5 medium, 7 minor).<br>
- Jest scripts for authentication and scheduling passed, ensuring reliable automation.<br>
- TC-SM-006 (email verification) pending, may uncover additional defects.<br>
- Core functionality impacted by Blocker (DEF-007); prioritize for demo readiness.<br>

> ✅ This test cycle confirms partial functional readiness, pending fixes for critical defects and TC-SM-006 execution.<br>

---

**Prepared By**: Martin Kimani<br>
**Date**: July 15, 2025<br>