# hpp-hackathon-app (Healthcare patient portal App)

## Overview

This project is a Healthcare Patient Portal application designed to provide a secure, scalable, and user-friendly experience for both patients and administrators.

## Responsive & Accessible Design

The application is built with a mobile, responsive approach.

best practices are followed, 
- Including semantic HTML, ARIA attributes
- Focus on scalable and maintainable code for developers.

## Technology Highlights

The tech stack leverages modern frameworks and libraries to deliver a robust, maintainable solution
- **Angular 17** for frontend
- **Bootstrap 5** and **SCSS** for responsive, customizable UI
- **Node.js** and **Express.js** for backend APIs
- **MongoDB** for data storage

## Centralized Content Management Approach

To support multiple markets and languages, the app uses a centralized content management:
This approach ensures scalable, maintainable, and market-specific content delivery across the entire application.

## Tech Stack

- **Frontend:** Angular 17 (hybrid mode for native and standalone support)
    - **UI Framework:** Bootstrap
    - **Styling:** Advanced SCSS for maintainable styles

- **Backend:** Node.js with Express.js
    - **Database:** MongoDB

## Features

- **Role-Based Dashboards:** Separate interfaces for patients and admins
- **Authentication & Security:**
    - JWT tokens for authentication
    - Password hashing for secure storage
    - Helmet middleware to enhance API security
    - rateLimiter to restrict the number of API calls per user,

- **Architecture:** Follows MVC pattern for clean, maintainable, and scalable code

- **Public & Private Routes:** 
    - Public: Login and registration
    - Private: Protected APIs and dashboard features

## Getting Started

1. **Clone the repository**
2. **Install dependencies** for both frontend and backend
3. **Configure environment variables - backend** (MongoDB URI, JWT secret)
5. **Run the backend server**
6. **Run the Angular frontend**

## Folder Structure

- `/frontend` - Angular 17 app
- `/backend` - Node.js/Express API/MongoDB


==============================================================
## 🚩 Project Highlights & Unique Implementation Details

- **Centralized JSON Content System:**  
  All UI content is dynamically loaded from JSON files using a central service (`jsonservices`). This enables easy updates, localization, and supports multi-market/multi-brand scenarios without hardcoding.  
  _See HTML components and `jsonservices` for reference._

- **Central Routing System:**  
  Routing is managed centrally and only used in HTML components, making navigation logic clear and maintainable.

- **Role-Based Registration:**  
  The registration form dynamically shows a role dropdown (Doctor/Admin) only for `/admin/register` routes, supporting flexible user management.

- **Multi-Market & Multi-Brand Ready:**  
  The JSON-driven content system is designed to support multiple countries, brands, and dashboards (e.g., UN, UK, IN, etc.) with minimal code changes.

- **Authentication & Security:**  
  - JWT tokens for authentication  
  - Password hashing for secure storage  
  - Helmet middleware for API security  
  - Rate limiting to restrict API calls per user  
  - Angular Auth Guards and HTTP Interceptors for route protection and backend connectivity

- **Centralized Error Handling:**  
  - All controller API errors are caught using async/await and Express error middleware in Node.js.
  - Angular interceptors handle authentication and backend errors globally.

- **Testing:**  
  - Unit test scaffolding is present for both Angular and Node.js.
  - Due to time constraints, not all tests are complete, but the structure is ready for scalable coverage.

- **Responsive & Accessible Design:**  
  - Semantic HTML and ARIA attributes  
  - Bootstrap 5 and SCSS for responsive, accessible UI

- **Architecture:**  
  - Follows MVC pattern for clean, maintainable, and scalable code  
  - Hybrid Angular 17 app (native and standalone support)  
  - Centralized async error handling in Node.js controllers

- **Async/Await & Error Middleware:**  
  All backend controllers use async/await and a centralized error handler to catch and respond to errors consistently.

- **Pending:**  
  - **Admin Dashboard:** Not fully implemented due to time constraints.
  - **Full Unit Test Coverage:** Structure is present, but not all tests are complete.

---

## 📝 How to Explore

- Review the `jsonservices` and HTML components to see centralized content management in action.
- Check `auth.guard.ts` and HTTP interceptors in Angular for route and API protection.
- Explore Node.js controllers and error middleware for centralized async error handling.

---

## ⚡ Final Note

This project demonstrates a scalable, maintainable approach to building a healthcare portal with multi-market support, centralized content, and robust security.  
Due to time constraints, some features (like the admin dashboard and full test coverage) are not complete, but the architecture is ready for easy extension and production use.
