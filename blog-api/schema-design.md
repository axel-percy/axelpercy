# MongoDB Schema Design for Blog API

## 1. Users Collection
Holds user authentication and role data.

| Field        | Type     | Description                    |
|--------------|----------|--------------------------------|
| _id          | ObjectId | Unique identifier              |
| username     | String   | User's name                    |
| email        | String   | User's email (unique)          |
| password     | String   | Hashed password                |
| role         | String   | 'author' or 'admin'            |
| createdAt    | Date     | Timestamp                      |

### Sample Document:
```json
{
  "_id": "ObjectId",
  "username": "CyusaGael4",
  "email": "cyusagaelrudasingwa@gmail.com",
  "password": "...hashed...",
  "role": "author",
  "createdAt": "2024-04-01T00:00:00Z"
}
