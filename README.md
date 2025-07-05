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
