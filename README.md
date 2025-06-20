# 🧠 Kanban App

A full-stack Kanban board project built with **Next.js** and **Express.js**, created to deepen my understanding of modern web development practices and tools.

This app is still in active development and is being used as a learning playground for:

- Scalable Next.js applications
- Zustand (first time using it!)
- Express.js and backend API design
- Responsive Tailwind UI
- Authentication, database integration, testing, and DevOps

---

## 🚀 Live Demo

- **Frontend**: [kanban-app-sage-eta.vercel.app](https://kanban-app-sage-eta.vercel.app)
- **Backend**: [kanban-app-1-2rpk.onrender.com](https://kanban-app-1-2rpk.onrender.com)

> ⚠️ Note: Currently using mock data and environment variables are not fully wired for production.

---

## 🧩 Tech Stack

### 🔹 Frontend

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (global state management – first time using it instead of Redux!)
- **React Hooks + Modals**

### 🔹 Backend

- **Express.js**
- **Node.js + TypeScript**
- **CORS** setup
- **RESTful API**

### 🔹 Deployment

- **Vercel** (frontend)
- **Render** (backend)

---

## ✅ Current Features

- 🗂️ Kanban board with task columns (To Do, In Progress, Review, Done)
- ⚡ Project view with fetched tasks from backend
- 🧠 Zustand store for state management
- 💬 Modal to view individual task details
- 🎯 Deployed & integrated frontend/backend services
- 📐 Modern Tailwind-based UI with clean layout

---

## 🛠️ Learning Goals

This project was created to:

- Deepen my knowledge of **Next.js** in a real-world app structure
- Try **Zustand** as a simpler alternative to Redux
- Build a REST **API with Express.js** from scratch
- **Deploy full-stack apps** using Vercel and Render
- Design clean and **responsive** layouts using Tailwind
- Learn the basics of **DevOps**, environment configuration and CI/CD
- Gain hands-on experience with **database modeling** (next: Prisma + PostgreSQL)
- Get comfortable writing **tests** — unit, integration, and E2E

---

## 📌 Roadmap

- [ ] CRUD for projects & tasks (add, edit, delete)
- [ ] Connect a real database (PostgreSQL or SQLite via Prisma)
- [ ] Add user authentication & accounts
- [ ] Improve error and loading states (dedicated components)
- [ ] Style responsiveness across all screen sizes
- [ ] Write unit/integration tests (Jest, React Testing Library)
- [ ] Add E2E testing (Cypress or Playwright)
- [ ] Add CI/CD & containerization (Docker, GitHub Actions)

---

## 📦 Local Development

```bash
# Clone the repository
git clone https://github.com/Przemek-Przybylak/kanban-app
cd kanban-app

# Install dependencies
npm install

# Run frontend (Next.js)
npm run dev

# Run backend
cd backend
npm install
npm run dev

# Set your .env values as needed, e.g.:
NEXT_PUBLIC_API_URL=http://localhost:3001/api

🙌 Final Thoughts
This is an evolving project built for learning and showcasing modern full-stack development.
Every week I'm expanding it with new features and refinements. Stay tuned!
```
