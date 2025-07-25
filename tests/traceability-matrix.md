# 1. Bugbreakers CleanCity QA Traceability Matrix

## 1.1 Document Overview
**Document Version:** 1.1  
**Date:** 2025-07-15   
**Phase:** Test Case Execution and Reporting (STLC Phase 3)  

This traceability matrix maps test cases from [`test-cases.md`](test-cases.md) to functional requirements (FR-001–FR-097) from [`functional-requirements.md`](../docs/functional-requirements.md), ensuring 100% coverage as required by `Bugbreakers_CleanCity_QA_test-plan.md` and [`submission.md`](../docs/submission.md). It supports Phase 3 deliverables (Week 3, July 16, 2025), linking test cases to defects in `defect-log.md` via GitHub Projects (`jira-setup.md`). The Bugbreakers team (Samuel, Martin, Bridget) verifies mappings to confirm test execution and defect tracking for the CleanCity web application.

## 1.2 Objectives
- Map all test cases to functional requirements (FR-001–FR-097).
- Verify 100% coverage of authentication, forms, scheduling, dashboard, community feed, admin, accessibility, usability, `localStorage`, performance, security, and compatibility.
- Maps test cases to defects (e.g., DEF-001–DEF-008) for traceability.
- Support final report and video submission per `submission.md`.

# 2. Traceability Matrix
| Test Case ID | FR Covered         | Description                                    | Status | Defect ID       | Tester       |
|--------------|--------------------|------------------------------------------------|--------|-----------------|--------------|
| TC-SM-001    | FR-001            | Verify successful user registration            | Fail   | DEF-008         | Samuel       |
| TC-SM-002    | FR-004–FR-005     | Verify login with valid credentials (Jest)     | Pass   | -               | Samuel       |
| TC-MT-001    | FR-004            | Verify login with invalid email                | Pass   | -               | Martin       |
| TC-MT-002    | FR-008            | Verify password requirements enforcement       | Fail   | DEF-006         | Martin       |
| TC-MT-003    | FR-012            | Verify form submission with valid data         | Pass   | -               | Martin       |
| TC-MT-004    | FR-015            | Verify form with empty fields                  | Pass   | -               | Martin       |
| TC-MT-005    | FR-012            | Verify form with invalid waste type            | Pass   | -               | Martin       |
| TC-SM-003    | FR-013            | Verify scheduling with future date (Jest)      | Pass   | -               | Samuel       |
| TC-SM-004    | FR-013            | Verify scheduling with past date               | Fail   | DEF-001         | Samuel       |
| TC-BT-001    | FR-023            | Verify dashboard stats display                 | Pass   | -               | Bridget      |
| TC-BT-002    | FR-025            | Verify dashboard filter by status              | Pass   | -               | Bridget      |
| TC-BT-003    | FR-027            | Verify dashboard sorting by date               | Pass   | -               | Bridget      |
| TC-MT-006    | FR-027            | Verify dashboard with `localStorage` overflow  | Fail   | DEF-001         | Martin       |
| TC-SM-005    | FR-041–FR-043     | Verify community post submission               | Pass   | -               | Martin       |
| TC-MT-007    | FR-042            | Verify post with XSS payload                   | Pass   | -               | Martin       |
| TC-BT-004    | FR-053            | Verify request status update                   | Pass   | -               | Bridget      |
| TC-BT-005    | FR-054            | Verify request cancellation                    | Fail   | DEF-005, DEF-007 | Bridget      |
| TC-BT-006    | FR-057            | Verify admin data display                      | Pass   | -               | Bridget      |
| TC-MT-008    | FR-071            | Verify WCAG 2.1 AA compliance (axe scan)       | Fail   | DEF-002         | Martin       |
| TC-MT-009    | FR-072            | Verify keyboard navigation                    | Pass   | -               | Martin       |
| TC-BT-007    | FR-075            | Verify intuitive navigation                    | Pass   | -               | Bridget      |
| TC-BT-008    | FR-084            | Verify page load time (<3s)                    | Pass   | -               | Bridget      |
| TC-BT-009    | FR-086            | Verify cross-browser compatibility            | Pass   | -               | Bridget      |
| TC-SM-006    | FR-002            | Verify account verification email sent         | To Do  | -               | Samuel       |

**Notes**:
- **Coverage**: Test cases cover FR-001–FR-002, FR-004–FR-005, FR-008, FR-012–FR-013, FR-015, FR-023, FR-025, FR-027, FR-041–FR-043, FR-053–FR-054, FR-057, FR-071–FR-072, FR-075, FR-084, FR-086, addressing key modules (authentication, forms, scheduling, dashboard, community feed, admin, accessibility, usability, `localStorage`, performance, security, compatibility).
- **Defects**: Linked to `defect-log.md` (DEF-001: scheduling/storage issues, DEF-002: accessibility violations, DEF-003: form validation, DEF-004: feedback form, DEF-005: missing Cancel button, DEF-006: weak passwords, DEF-007: admin request display, DEF-008: registration `localStorage`).
- **Status**: 16 test cases passed, 7 failed, 1 to do, aligning with `test-cases.md`.
- **Testers**: Samuel (authentication, scheduling, coordination), Martin (forms, scheduling, dashboard, community feed, accessibility, security), Bridget (dashboard, admin, usability, performance, compatibility).

# 3. Traceability Summary
- **Total Test Cases**: 24, covering all specified FRs.
- **Functional Coverage**: 100% for listed FRs (additional FRs may require further test cases in `final-report.md`).
- **Defect Tracking**: 8 defects logged (DEF-001–DEF-008), targeting 15 by July 16, 2025 (3 critical/major, 5 medium, 7 minor) per `faq.md`.
- **Next Steps**: Finalize defect logging, update [`final-report.md`](/tests/final-report.md), and prepare video submission.