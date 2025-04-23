// README.md

# Blog API Project

A RESTful API for a blog application built using Node.js, Express, and MongoDB with JWT authentication and role-based access control.

##  Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- express-validator
- dotenv

##  Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/blog-api.git
cd blog-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root folder and add:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogapi
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### Auth
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and receive JWT token

###  Users (Admin only where specified)
- `GET /api/users` – Get all users *(admin only)*
- `GET /api/users/:id` – Get specific user
- `PUT /api/users/:id` – Update user *(self or admin)*
- `DELETE /api/users/:id` – Delete user *(admin only)*

###  Categories
- `GET /api/categories` – Get all categories
- `GET /api/categories/:id` – Get specific category
- `POST /api/categories` – Create category *(admin only)*
- `PUT /api/categories/:id` – Update category *(admin only)*
- `DELETE /api/categories/:id` – Delete category *(admin only)*

###  Blogs
- `GET /api/blogs` – Get all blogs
- `GET /api/blogs/:id` – Get specific blog
- `GET /api/blogs/category/:id` – Get blogs by category
- `POST /api/blogs` – Create blog *(author or admin only)*
- `PUT /api/blogs/:id` – Update blog *(owner or admin only)*
- `DELETE /api/blogs/:id` – Delete blog *(owner or admin only)*

##  Roles
- **Guest**: View blogs & categories
- **Author**: Create/edit/delete own blogs
- **Admin**: Full access (users, categories, all blogs)

##  Testing
Use Postman or Thunder Client to test endpoints. Import the included collection from:
`/docs/blog-api.postman_collection.json`

##  MongoDB Schema Overview

### User
```js
{
  username: String,
  email: String,
  password: String,
  role: { type: String, enum: ['author', 'admin'], default: 'author' },
  timestamps: true
}
```

### Category
```js
{
  name: String,
  timestamps: true
}
```

### Blog
```js
{
  title: String,
  content: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamps: true
}
```
