# TodoApp Docker

A simple Node.js Todo API containerized with Docker and connected to a MongoDB database.

## Features

- **Full CRUD**: Create, Read, Update, and Delete todos.
- **Dockerized**: Easy deployment with Docker and Docker Compose.
- **Persistent Data**: Uses MongoDB with Docker volumes for data persistence.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Containerization**: Docker, Docker Compose

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/isilulgerr/TodoApp-Docker.git
cd TodoApp-Docker
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add your MongoDB URI:
```text
MONGO_URI=mongodb://mongo-db:27017/tododb
PORT=3000
```

### 3. Run with Docker Compose
```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/todos` | Get all todos |
| GET | `/todos/:id` | Get a specific todo by ID |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/:id` | Update a todo |
| DELETE | `/todos/:id` | Delete a todo |

## License

This project is licensed under the ISC License.
