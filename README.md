# MovieVerse
A full-stack Movie Management Application built using MERN stack, featuring authentication, role-based access control, pagination, search, sorting, and responsive UI.


# Features
## Authentication & Authorization
- JWT-based authentcation
- Secure Login System
- Role based access: 
- Admin:  Add , Edit , Delete Movies
- User:  View & Search Movies
- Protected Routes using middleware.

# Movies Management
- List movies with pagination.
- Search movies by title & description.
- Sort movies by:
- Title
- Rating
- Duration
- Release Date
 ## Admin can:
 - Add new movie
 - Edit movies
 - Delete movies

 # Responsive UI
 - Built with Material UI (MUI)
 - Smooth animation using Framer Motion
 - Fully responsive

 # Backend Architecture
 - MVC Pattern( Models, Controllers, Routes)
 - Secure API endpoints
 - Input validation & Error handling
 - Pagination & sorting handled at database level


 # Tech Stack
 ## Frontend
 - React
 - React Router
 - Material UI
 - Axios
 - Framer Motion
 ## Backend
 - Node.js
 - Express.js
 - MongoDB
 - Mongoose
 - JWT Authentication



 # Project Structure
 ```
 movie-app/
├── backend/
|   |- config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
|   |- queue/
|   |- scrripts/
│   └── server.js
│
├── frontend/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── theme.js
|   |- App.css
|   |- index.css
│   └── App.jsx

```


# How Authentication works
1. User login
2. Backend  returns JWT tokens
3. Token stored in LocalStorage
4. Axios interceptor attaches token to every request
5. Backend validates token via middleware


# How to run locally
## Backend
```
cd backend
npm install
npm start

```
## Frontend

```
cd frontend
npm install
npm start

```


# Admin Access
- To access admin features:
- Login with an account having role: "admin"
- Admin options will appear automatically in the UI

