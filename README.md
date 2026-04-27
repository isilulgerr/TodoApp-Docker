# 🚀 Full-Stack Todo API with Docker & CI/CD Pipeline

A production-ready Todo List API built with Node.js and MongoDB, fully containerized with Docker and automated via GitHub Actions. This project demonstrates modern DevOps practices including Infrastructure as Code (IaC) and automated deployment pipelines.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Containerization:** Docker, Docker Compose
- **Infrastructure:** Terraform (Provisioning), Ansible (Configuration)
- **CI/CD:** GitHub Actions
- **Cloud (Architecture):** Designed for DigitalOcean/AWS

## 🏗️ Project Architecture

The application consists of two main services managed by Docker Compose:
1. **API Service:** Node.js environment running the REST API.
2. **Database Service:** MongoDB instance with persistent volume storage.

## 🚀 Getting Started (Local)

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```

2. **Run with Docker Compose:**

   ```bash
   docker compose up --build
   ```

3. **Access the API:**
   Navigate to `http://localhost:3000/todos` in your browser.

## 🤖 CI/CD Workflow

This project includes a GitHub Actions pipeline that triggers on every push to `main`:

- **Build Stage:** Installs dependencies and runs build tests.
- **Docker Stage:** Verifies that the Docker image and Compose orchestration are functional.
- **IaC Ready:** Contains Terraform scripts to provision cloud resources and Ansible playbooks to configure Docker environments.

## 📁 Key Files
- **Dockerfile:** Instructions for containerizing the Node.js API.

- **docker-compose.yml:** Orchestrates the API and MongoDB services.

- **.github/workflows/main.yml:** The CI/CD "brain" of the project.

- **/terraform:** Infrastructure scripts.

- **/ansible:** Configuration management playbooks.