# 🧪 Test Plan – CleanCity QA Team

**Project:** CleanCity – Waste Pickup Scheduler  
**Team Name:** CleanTrackers  
**Prepared by:** Martin Kimani  
**Date:** July 4, 2025

---

## 1. 📌 Objective

Ensure that the CleanCity application meets expected quality standards by thoroughly testing functionality, usability, performance, and accessibility using structured manual testing techniques.

---

## 2. 🧪 Testing Types (Phase 1 Focus)

| Type                  | Description |
|-----------------------|-------------|
| Functional Testing    | Verifying form behavior, dashboard filters, user roles, and localStorage |
| Accessibility Testing | Using axe DevTools, WAVE, keyboard-only navigation |
| Usability Testing     | Checking clarity of UI, messages, navigation |
| Compatibility Testing | Ensuring the app works across browsers and devices |
| Edge Case Testing     | Testing unusual inputs, long names, empty states |

---

## 3. 🧰 Tools & Frameworks

| Category               | Tool / Platform                  |
|------------------------|----------------------------------|
| Version Control        | GitHub                           |
| Manual Testing         | Chrome DevTools, Lighthouse      |
| Accessibility Testing  | axe DevTools, WAVE, NVDA         |
| Project Management     | GitHub Projects (Kanban)         |
| Documentation & Issues | GitHub Issues, Markdown          |

---

## 4. 🌐 Test Environment

See detailed setup in `tests/environment.md`

---

## 5. 👤 Assigned Team Roles

| Team Member     | Role                            | Responsibilities                                                                 |
|------------------|----------------------------------|----------------------------------------------------------------------------------|
| Samuel Mbai      | Team Lead & QA Coordinator       | Kanban setup, planning, repo structure, task distribution and contribution to the whole project.|
| Martin Kimani    | Manual Tester & Accessibility    | Test documentation, edge case coverage, accessibility validation                 |
| Bridget Ngugi    | Functional Tester & Bug Analyst  | Manual test execution, bug reporting, regression & exploratory testing           |

---

## 6. 🧭 Testing Strategy

- Define and document clear test cases for each feature (see `test-cases.md`)
- Use GitHub Projects to organize and assign tasks
- Log bugs in GitHub Issues with full reproduction steps, severity, and labels
- Perform accessibility and mobile testing manually
- Take screenshots/videos as evidence of test results
- Use a versioned structure: all test docs in `/tests/` folder

---

## 7. 📦 Deliverables (Phase 1)

| File                     | Description                                      |
|--------------------------|--------------------------------------------------|
| `test-plan.md`           | This document – plan, tools, roles, scope        |
| `test-data.md`           | Test data to be used in all cases                |
| `roles.md`               | Team structure and assignments                   |
| `environment.md`         | Environment setup across browsers/devices        |
| GitHub Project Board     | Kanban-style task tracking board                 |

---

## ✅ Summary

The focus for Week 1 is setting up a structured test plan, environment, and team responsibilities using **manual and exploratory testing** techniques. Automation may be considered in later phases using appropriate tools like Jest (not Selenium or PyTest).
