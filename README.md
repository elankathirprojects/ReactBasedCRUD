# User Management CRUD App

A simple and extensible React-based CRUD application built using **React (JavaScript)** and **Material UI**.
The app allows creating, viewing, updating, deleting, searching, and paginating user data with a mock API using **JSON Server**.

---

## Features

* Create new user
* View all users
* Update user information
* Delete user
* Search users (by name/email)
* Pagination
* Form validation
* Auto refresh UI after CRUD (no page reload)
* Extensible form structure (easy to add new fields)
* Clean and modular folder structure

---

## Tech Stack

* React (JavaScript)
* Material UI (MUI)
* React Hook Form
* Yup Validation
* Axios
* JSON Server (Mock API)
* React Router

---

## Project Structure

```
src/
│
├── api/
│   └── userService.js        # API calls (Axios)
│
├── components/
│   ├── UserForm.js           # Add/Edit form
│   └── UserTable.js          # User list table
│
├── hooks/
│   └── useUsers.js           # Custom hook for CRUD logic
│
├── pages/
│   └── UsersPage.js          # Main page (Search + Pagination)
│
├── validation/
│   └── userSchema.js         # Yup validation schema
│
├── App.js
└── index.js
```

---

## Installation

### 1. Clone the repository

```
git clone <your-repo-url>
cd project-folder
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Start JSON Server (Mock API)

Make sure you have a `db.json` file in the root:

```
{
  "users": []
}
```

Run:

```
npm run server
```

JSON Server will start at:

```
http://localhost:3001/users
```

// Local
const API = "http://localhost:3001/users";

// Live
const API = "https://699312db8f29113acd3fe20a.mockapi.io/users";

---

### 4. Start React App

```
npm start
```

Open:

```
http://localhost:3000
```

---

## API Endpoints (JSON Server)

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /users     | Get all users |
| POST   | /users     | Create user   |
| PUT    | /users/:id | Update user   |
| DELETE | /users/:id | Delete user   |

---

## Form Fields

* First Name (Required)
* Last Name (Required)
* Email (Required, valid format)
* Phone Number (Required)

Validation handled using **Yup + React Hook Form**.

---

## Search & Pagination

* Search filters users by:

  * First Name
  * Last Name
  * Email
* Pagination updates automatically based on filtered results.
* No page refresh required.

---

## Extensibility (Adding New Fields)

The form is schema-driven. To add a new field:

### Step 1: Update validation

`src/validation/userSchema.js`

Example:

```
dob: yup.string().required("Date of Birth is required")
```

---

### Step 2: Add field in UserForm

Add a new input:

```
<TextField
  label="Date of Birth"
  {...register("dob")}
/>
```

---

### Step 3: Update db.json (optional)

New field will automatically be stored when creating users.

No changes needed in:

* API
* Table logic
* Hooks
