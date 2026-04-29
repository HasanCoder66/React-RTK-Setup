# React Auth + Redux Persist + Protected Routes

A professional authentication flow built with **React**, **Redux Toolkit**, **Redux Persist**, **React Router**, and **Tailwind CSS**.
This project includes **Login**, **Signup**, **Protected Dashboard**, **Public/Private Routes**, and **Async Thunk API call**.

---

# Features

* Login / Signup Authentication
* Protected Dashboard Route
* Public Route Guard
* Redux Toolkit State Management
* Redux Persist (localStorage)
* Async Thunk API Integration
* Controlled Form Components
* Reusable Input & Button Components
* Tailwind CSS UI
* Auto Redirect after Login/Signup
* Logout Functionality

---

# Tech Stack

* React
* React Router DOM
* Redux Toolkit
* Redux Persist
* Tailwind CSS
* Axios

---

# Project Structure

```
src/
│
├── components/
│   ├── Input.jsx
│   ├── Button.jsx
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Dashboard.jsx
│
├── redux/
│   ├── store.js
│   │
│   ├── feature/
│   │   ├── authSlice.js
│   │   ├── todoSlice.js
│   │   ├── rootReducer.js
│   │   └── persist.js
│   │
│   └── thunk/
│       └── todoThunk.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Routing Flow

```
/login       → Public Route
/signup      → Public Route
/dashboard   → Protected Route
```

### Public Route

If user already logged in → redirect to dashboard

### Protected Route

If user NOT logged in → redirect to login

---

# Authentication Flow

Signup → Save user in Redux store
Login → Match email & password
Success → set currentUser
Redirect → Dashboard

Logout → remove currentUser
Redirect → Login

---

# Redux Store Structure

```
store
 ├── auth
 │    ├── currentUser
 │    └── users[]
 │
 └── todo
      ├── items[]
      ├── loading
      └── error
```

---

# Auth Slice

### signup

Adds user into users array

### login

Match email + password
Set currentUser

### logout

Remove currentUser

---

# Todo Async Thunk

API:

```
https://dummyjson.com/todos
```

Thunk:

```
getTodos()
```

States handled:

* pending → loading true
* fulfilled → save todos
* rejected → error state

---

# Redux Persist

Redux state saved in localStorage

So:

* Refresh safe login
* user remains logged in
* dashboard persists

persist config:

```
key: "root"
storage: localStorage
```

---

# Dashboard Features

* User Profile Card
* Logout Button
* Todo List from API
* Redux State Data

---

# Controlled Form Fields

Login:

* email
* password

Signup:

* name
* email
* phone
* password
* confirmPassword

---

# Installation

Clone project

```
git clone <repo-url>
```

Install dependencies

```
npm install
```

Run project

```
npm run dev
```

---

# Dependencies

```
react-router-dom
@reduxjs/toolkit
react-redux
redux-persist
axios
tailwindcss
```

Install manually

```
npm install react-router-dom @reduxjs/toolkit react-redux redux-persist axios
```

---

# App Entry (main.jsx)

* BrowserRouter
* Redux Provider
* PersistGate

This ensures:

* routing works
* redux store available
* persisted state loaded

---

# Route Protection Logic

ProtectedRoute

```
if(!currentUser)
redirect → /login
```

PublicRoute

```
if(currentUser)
redirect → /dashboard
```

---

# Future Improvements

* JWT Authentication
* Backend Integration
* Form Validation
* Toast Notifications
* Loader UI
* Error Handling UI
* Add Todo Feature
* Delete Todo
* Edit Profile

---

# Author

Muhammad Hasan
Full Stack Developer
React + Redux Architecture
