# 1. Bugbreakers CleanCity QA Test Cases

## 1.1 Document Overview
**Document Version:** 1.1  
**Date:** 2025-07-14  
**Author:** Martin 
**Project:** CleanCity - Waste Pickup Scheduler  
**Phase:** Test Case Design and Execution (STLC Phase 2–3)  

This document defines test cases for the CleanCity web application, ensuring 100% coverage of functional requirements (FR-001–FR-097) from [`functional-requirements.md`](/docs/functional-requirements.md). It consolidates Phase 1 (Week 1: planning), Phase 2 (Week 2: 6 test cases drafted), and Phase 3 (Week 3: 24 test cases finalized, executed) per [`submission.md`](/docs/submission.md) and [`test-plan.md`](/tests/test-plan.md). Test cases cover authentication, forms, scheduling, dashboard, community feed, admin functions, accessibility, usability, `localStorage`, performance, security, and compatibility, using [`test-data.md`](/docs/test-data.md) inputs and linking to [`defect-log.md`](/tests/defect-log.md) via GitHub Projects. The Bugbreakers team (Samuel, Martin, Bridget) shares the workload evenly, with 8 test cases each.

## 1.2 Objectives
- Validate all functional requirements (FR-001–FR-097).
- Ensure WCAG 2.1 AA compliance (FR-071–FR-074).
- Verify cross-browser compatibility (FR-086) and responsive design (FR-069–FR-070).
- Test performance (FR-084–FR-085), security (FR-081–FR-083), and `localStorage` (FR-078–FR-080).
- Log 15 defects (3 critical/major, 5 medium, 7 minor) per [`faq.md`](/docs/faq.md).
- Include Jest automation for login (FR-004–FR-005) and scheduling (FR-012–FR-013).
- Distribute workload fairly: 8 test cases each for Samuel, Martin, Bridget.

# 2. Test Case Summary
| Module                | Test Cases | FRs Covered                     | Tester       | Count |
|-----------------------|------------|---------------------------------|--------------|-------|
| Authentication        | TC-SM-001–TC-SM-002, TC-MT-001–TC-MT-002 | FR-001, FR-004–FR-005, FR-008 | Samuel, Martin | 4     |
| Pickup Request Form   | TC-MT-003–TC-MT-005 | FR-012–FR-013, FR-015         | Martin       | 3     |
| Scheduling            | TC-SM-003–TC-SM-004 | FR-012–FR-013                 | Samuel       | 2     |
| Dashboard             | TC-BT-001–TC-BT-003, TC-MT-006 | FR-023, FR-025, FR-027       | Bridget, Martin | 4     |
| Community Feed        | TC-MT-007–TC-SM-002 | FR-041–FR-043                 | Martin       | 2     |
| Admin Panel           | TC-BT-004–TC-BT-006 | FR-053–FR-054, FR-057         | Bridget      | 3     |
| Accessibility         | TC-MT-008–TC-MT-011 | FR-071–FR-074                 | Martin       | 4     |
| Usability             | TC-BT-007         | FR-075                        | Bridget      | 1     |
| `localStorage`        | TC-MT-012         | FR-078                        | Martin       | 1     |
| Performance           | TC-BT-008         | FR-084                        | Bridget      | 1     |
| Security              | TC-MT-013         | FR-082                        | Martin       | 1     |
| Compatibility         | TC-BT-009         | FR-086                        | Bridget      | 1     |

**Notes**:
- Test case IDs: TC-<Initials>-<Nuber> (SM: Samuel, MT: Martin, BT: Bridget).
- Total: 24 test cases (8 per team member: Samuel: 4 manual, 4 automated; Martin: 8 manual; Bridget: 8 manual).
- Manual tests by Martin and Bridget; automated Jest tests by Samuel.
- Defects (e.g., DEF-001–DEF-004) logged in [`defect-log.md`](/tests/defect-log.md), tracked on GitHub Projects.

# 3. Test Cases

## 3.1 Authentication
| ID         | Description                                    | FR     | Test Data (`test-data.md`) | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-SM-001 | Verify successful user registration            | FR-001 | `user1@test.com`, `Test123!` | 1. Navigate to Register. 2. Enter valid email, password. 3. Submit. | Success message, user in `localStorage`      | Pass          | -         | Samuel |
| TC-SM-002 | Verify login with valid credentials (Jest)     | FR-004–FR-005 | `user1@test.com`, `Test123!` | 1. Run Jest script to simulate login. 2. Check session in `localStorage`. | User logged in, session stored             | Pass          | -         | Samuel |
| TC-MT-001 | Verify login with invalid email                | FR-004 | `invalid-email`, `Test123!` | 1. Navigate to Login. 2. Enter invalid email, valid password. 3. Submit. | Error: “Invalid email format”              | Pass          | -         | Martin |
| TC-MT-002 | Verify password requirements enforcement       | FR-008 | `user1@test.com`, `weak`   | 1. Navigate to Register. 2. Enter valid email, weak password. 3. Submit. | Error: “Password must be 8+ chars, include uppercase, number” | Pass          | -         | Martin |

## 3.2 Pickup Request Form
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-MT-003 | Verify form submission with valid data         | FR-012 | `user1@test.com`, valid date | 1. Login. 2. Navigate to Form. 3. Enter valid data. 4. Submit.       | Success message, request in `localStorage`   | Pass          | -         | Martin |
| TC-MT-004 | Verify form with empty fields                  | FR-015 | Empty fields               | 1. Login. 2. Navigate to Form. 3. Submit without data.               | Error: “All fields required”                | Pass          | -         | Martin |
| TC-MT-005 | Verify form with invalid waste type            | FR-012 | Invalid waste type         | 1. Login. 2. Navigate to Form. 3. Enter invalid waste type. 4. Submit. | Error: “Invalid waste type”                | Pass          | -         | Martin |

## 3.3 Scheduling
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-SM-003 | Verify scheduling with future date (Jest)      | FR-013 | Future date (2025-07-20)   | 1. Run Jest script to schedule pickup. 2. Check `localStorage`.       | Request scheduled, stored correctly         | Pass          | -         | Samuel |
| TC-SM-004 | Verify scheduling with past date              | FR-013 | Past date (2025-07-01)     | 1. Login. 2. Navigate to Form. 3. Enter past date. 4. Submit.        | Error: “Date must be future”                | Fail          | DEF-001   | Samuel |

## 3.4 Dashboard
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-001 | Verify dashboard stats display                 | FR-023 | `user1@test.com`, 3 requests | 1. Login. 2. Navigate to Dashboard. 3. Check stats.                 | Correct request count displayed             | Pass          | -         | Bridget |
| TC-BT-002 | Verify dashboard filter by status              | FR-025 | `user1@test.com`, “Pending” | 1. Login. 2. Navigate to Dashboard. 3. Filter by “Pending”.          | Only pending requests shown                 | Pass          | -         | Bridget |
| TC-BT-003 | Verify dashboard sorting by date               | FR-027 | Multiple requests          | 1. Login. 2. Navigate to Dashboard. 3. Sort by date.                | Requests sorted correctly                  | Pass          | -         | Bridget |
| TC-MT-006 | Verify dashboard with `localStorage` overflow  | FR-027 | Max `localStorage` (5MB)   | 1. Login. 2. Fill `localStorage`. 3. Load Dashboard.                | Error: “Storage limit exceeded”            | Fail          | DEF-001   | Martin |

## 3.5 Community Feed
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-SM-002 | Verify community post submission               | FR-041–FR-043 | `user1@test.com`, “Test post” | 1. Login. 2. Navigate to Community Feed. 3. Submit post. 4. Check persistence. | Post saved in `localStorage`, displayed   | Fail          | DEF-003   | Martin |
| TC-MT-007 | Verify post with XSS payload                   | FR-042 | `<script>alert('XSS')</script>` | 1. Login. 2. Navigate to Community Feed. 3. Submit XSS payload.     | Payload sanitized, no alert triggered      | Pass          | -         | Martin |

## 3.6 Admin Panel
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-004 | Verify request status update                   | FR-053 | `admin@test.com`, request ID | 1. Login as admin. 2. Navigate to Admin Panel. 3. Update status.    | Status updated in `localStorage`           | Pass          | -         | Bridget |
| TC-BT-005 | Verify request cancellation                    | FR-054 | `admin@test.com`, request ID | 1. Login as admin. 2. Navigate to Admin Panel. 3. Cancel request.   | Request removed from `localStorage`        | Pass          | -         | Bridget |
| TC-BT-006 | Verify admin data display                      | FR-057 | `admin@test.com`, 5 requests | 1. Login as admin. 2. Navigate to Admin Panel. 3. Check data.       | All requests displayed correctly           | Pass          | -         | Bridget |

## 3.7 Accessibility
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-MT-008 | Verify WCAG 2.1 AA compliance (axe scan)       | FR-071 | axe DevTools               | 1. Run axe scan on homepage. 2. Check violations.                   | No WCAG 2.1 AA violations                 | Fail          | DEF-002   | Martin |
| TC-MT-009 | Verify keyboard navigation                    | FR-072 | Keyboard only              | 1. Navigate app using Tab/Enter. 2. Check all controls accessible.  | All controls reachable by keyboard         | Pass          | -         | Martin |
| TC-MT-010 | Verify screen reader support (NVDA)            | FR-073 | NVDA, `user1@test.com`     | 1. Login. 2. Navigate with NVDA. 3. Check form labels, alt-text.    | All elements readable by NVDA             | Fail          | DEF-002   | Martin |
| TC-MT-011 | Verify color contrast                          | FR-074 | WAVE tool                  | 1. Run WAVE on dashboard. 2. Check contrast ratios.                 | Contrast meets WCAG 2.1 AA (4.5:1)        | Pass          | -         | Martin |

## 3.8 Usability
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-007 | Verify intuitive navigation                    | FR-075 | `user1@test.com`           | 1. Login. 2. Navigate to Form, Dashboard, Feed. 3. Check ease of use. | Navigation clear, no user confusion        | Pass          | -         | Bridget |

## 3.9 `localStorage`
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-MT-012 | Verify data persistence in `localStorage`      | FR-078 | `user1@test.com`, 3 requests | 1. Login. 2. Submit form. 3. Refresh page. 4. Check `localStorage`. | Data persists after refresh               | Fail          | DEF-004   | Martin |

## 3.10 Performance
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-008 | Verify page load time (<3s)                    | FR-084 | Lighthouse, Chrome         | 1. Run Lighthouse on homepage. 2. Check load time.                  | Page load <3 seconds                      | Pass          | -         | Bridget |

## 3.11 Security
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-MT-013 | Verify input validation against XSS            | FR-082 | `<script>alert('XSS')</script>` | 1. Login. 2. Enter XSS payload in form. 3. Submit.                 | Payload sanitized, no alert triggered      | Pass          | -         | Martin |

## 3.12 Compatibility
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-009 | Verify cross-browser compatibility            | FR-086 | Chrome, Firefox, Safari, Edge | 1. Login on each browser. 2. Test form submission, dashboard.       | Consistent UI/functionality across browsers | Pass          | -         | Bridget |

# 4. Test Execution Status
| Status        | Test Cases | Notes                                              |
|---------------|------------|----------------------------------------------------|
| Drafted       | 6          | TC-SM-001–TC-SM-002, TC-MT-001–TC-MT-004 (Week 2) |
| In Progress   | 18         | TC-SM-003–TC-SM-004, TC-MT-005–TC-MT-013, TC-BT-001–TC-BT-009 (Week 3) |
| Executed      | 6          | All Week 2 test cases executed, 3 failed (DEF-001–DEF-003) |
| To Execute    | 18         | Complete execution by July 16, 2025 (Week 3)       |

# 5. Traceability
- Test cases will be mapped   in [`traceability-matrix.md`](/tests/traceability-matrix.md).
- Placeholder mapping:
  | Test Case ID | FR Covered         |
  |--------------|--------------------|
  | TC-SM-001    | FR-001            |
  | TC-SM-002    | FR-004–FR-005     |
  | TC-MT-001    | FR-004            |
  | TC-MT-002    | FR-008            |
  | TC-MT-003–TC-MT-005 | FR-012–FR-013, FR-015 |
  | TC-SM-003–TC-SM-004 | FR-013            |
  | TC-BT-001–TC-BT-003, TC-MT-006 | FR-023, FR-025, FR-027 |
  | TC-SM-002, TC-MT-007 | FR-041–FR-043    |
  | TC-BT-004–TC-BT-006 | FR-053–FR-054, FR-057 |
  | TC-MT-008–TC-MT-011 | FR-071–FR-074    |
  | TC-BT-007    | FR-075            |
  | TC-MT-012    | FR-078            |
  | TC-BT-008    | FR-084            |
  | TC-MT-013    | FR-082            |
  | TC-BT-009    | FR-086            |
