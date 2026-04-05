<div align="center">
  <!-- Replace the src link below with your actual screenshot URL -->
  <img src="https://via.placeholder.com/1000x500.png?text=Ronin.pk+Landing+Page+Clone+Screenshot" alt="Ronin.pk Clone Landing Page" width="100%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>

  <br />
  <br />

  <h1>🚀 Ronin.pk Landing Page Clone</h1>

  <p>
    A full-stack, meticulously crafted clone of the Ronin.pk landing page featuring an engaging frontend and a highly secure, feature-rich backend API.
  </p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20TailwindCSS%20%7C%20JS-blue?style=for-the-badge&logo=html5" alt="Frontend" />
    <img src="https://img.shields.io/badge/Backend-Django-092E20?style=for-the-badge&logo=django" alt="Backend" />
    <img src="https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql" alt="Database" />
    <img src="https://img.shields.io/badge/Task_Queue-Celery%20%7C%20Redis-DC382D?style=for-the-badge&logo=redis" alt="Task Queue" />
  </p>

  <h3>
    🌐 Live Demos: 
    <a href="https://your-project-link.vercel.app">Frontend (Vercel)</a>
    <span> | </span>
    <a href="https://your-backend-link.up.railway.app">Backend API (Railway)</a>
  </h3>
</div>

<hr />

## 📖 About The Project

This project is a sophisticated clone of the **Ronin.pk** e-commerce landing page. It is divided into two distinct components: a visually stunning **Frontend** showcasing modern UI/UX principles, and a robust **Backend** handling secure authentication, asynchronous tasks, and seamless API integrations.

---

## ✨ Key Features

### 🎨 Frontend Excellence
*   **Movable & Responsive Navbar**: A sleek, sticky navigation bar that adapts to user scrolling and device sizes.
*   **Dynamic Product Cards**: Beautifully styled cards that display products fetch from the backend API.
*   **Scrolling Card Carousels**: Smooth, horizontal scrolling sections for displaying product categories or featured items.
*   **Modern Styling**: Built rapidly and responsively using **TailwindCSS**.

### 🔒 Backend & Security Powerhouse (Django)
*   **Custom User Model**: Extended Django authentication for tailored user data handling.
*   **Rock-Solid Security**: Implemented CSRF tokens, secure session handling, and encrypted passwords.
*   **Comprehensive Auth Flow**: Includes Registration, Login, and Password Changing functionality.
*   **Social Authentication**: One-click Google Login integration for seamless user onboarding.
*   **Asynchronous Notifications**: Utilizes **Redis** and **Celery** to send welcome/login messages to users efficiently without blocking the main server thread.
*   **RESTful APIs**: Multiple exposed API endpoints to serve dynamic data directly to the frontend application.

---

## 🛠️ Tech Stack

**Frontend:**
*   ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) HTML5
*   ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) TailwindCSS
*   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) Vanilla JavaScript

**Backend:**
*   ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=flat&logo=django&logoColor=white) Python / Django
*   ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=flat&logo=redis&logoColor=white) Redis
*   ![Celery](https://img.shields.io/badge/celery-%2337814A.svg?style=flat&logo=celery&logoColor=white) Celery

**Deployment:**
*   ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white) **Vercel** (Frontend Hosting)
*   ![Railway](https://img.shields.io/badge/Railway-131415?style=flat&logo=railway&logoColor=white) **Railway** (Backend API Hosting & Redis Server)

---

## 📂 Project Structure

```text
Ronin-pk-landing-page-clone/
│
├── frontend/             # Vercel deployed UI
│   ├── index.html        # Main landing page
│   ├── styles/           # Tailwind CSS files
│   └── scripts/          # JS scripts for fetching APIs & UI interactions
│
├── backend/              # Railway deployed Django application
│   ├── core/             # Django settings & core configurations
│   ├── users/            # Custom User model & Auth flows
│   ├── api/              # REST API views & serializers
│   └── tasks.py          # Celery tasks for asynchronous messaging
│
└── railway.json          # Deployment configurations for Railway
```

---

## 🚀 Getting Started (Local Development)

Want to run this project locally? Follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/farmanalifjk-rgb/Ronin-pk-landing-page-clone.git
cd Ronin-pk-landing-page-clone
```

### 2. Backend Setup
```bash
cd backend
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start Redis (Ensure Redis is installed on your machine)
redis-server

# In a new terminal, start Celery worker
celery -A core worker -l info

# Start Django Server
python manage.py runserver
```

### 3. Frontend Setup
```bash
cd frontend
# You can use Live Server in VSCode or a simple Python HTTP server
python -m http.server 5500
```
Open `http://localhost:5500` in your browser.

---

## 💡 Acknowledgements & Author

Built with passion to demonstrate the seamless integration of a beautiful frontend with a complex, secure, and asynchronous backend architecture.

- **Developer:** [Your Name / GitHub Profile](https://github.com/farmanalifjk-rgb)
- **Original Inspiration:** [Ronin.pk](https://ronin.pk)

- ## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information. 

By using the MIT license, this code is open and free to use, modify, and distribute for both personal and commercial projects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<div align="center">
  <i>If you found this repository helpful or interesting, please consider giving it a ⭐!</i>
</div>
