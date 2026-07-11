# Little Lemon Restaurant - Front-End Developer Capstone

Welcome to the **Little Lemon Capstone Project**, completed as the final milestone for the Meta Front-End Developer Professional Certification. This application is a fully responsive, semantic, accessible, and functional table reservation system built using **React.js**.

---

## 🚀 Grading Criteria Checklist Compliance

* **UX/UI Design & Implementation:** Followed a high-fidelity visual system built inside Figma using classic Mediterranean styling cues.
* **Semantic HTML & Accessibility:** Built using strict HTML5 structural tags (`<nav>`, `<header>`, `<main>`, `<footer>`) with explicit `aria-label` attributes and form focus indicators to satisfy WCAG AA criteria.
* **Form Validation & Edge Cases:** Features a state-driven controlled form loop that validates user counts (1-10) and requires a selected date before allowing submissions. Buttons toggle state visually based on form validity.
* **Live API Connectivity:** Interacts seamlessly with asynchronous backend logic via a state reducer (`useReducer`) to automatically update available booking slots depending on the calendar date selected.
* **Unit Testing Framework:** Contains comprehensive automated test suites executed via Jest to guard state transitions and array reductions.

---

## 🎨 Design Tokens & Branding

* **Primary Colors:**
  * Little Lemon Dark Green: `#495E57`
  * Little Lemon Bright Yellow: `#F4CE14`
* **Typography:**
  * Headings: Elegant Serif / Markazi Text
  * Body Copy: Clean Sans-Serif / Karla

---

## 🛠️ Local Setup & Execution Instructions

To run this project locally on your machine, ensure you have Node.js installed, then follow these steps inside your terminal:

1. Clone the Repository:
   git clone https://github.com/JJHAVOK/Little-Lemons-Project.git

2. Navigate into the Project Directory:
   cd jjhavok_Little_Lemons_Project

3. Install Dependencies:
   npm install

4. Launch the Local Development Server:
   npm start
   (Your browser will automatically open up an active tab pointing directly to http://localhost:3000/)

5. Execute the Automated Test Suite:
   npm test
   
