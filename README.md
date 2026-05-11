<div align="center">

# SW Technologies — Full Stack (Frontend + Backend)

**Live app (GitHub Pages)**: [https://nikky-kumar7505.github.io/SW-Technologies/](https://nikky-kumar7505.github.io/SW-Technologies/)

The deployed site is the **same frontend** (HTML/CSS/JS), wired to the **live backend API** (contact, newsletter, quote modal, login/register, profile, admin). Update the API base URL in `Frontend/assets/js/config.js` if you point the UI at a different server.

<p>
  <a href="https://nikky-kumar7505.github.io/SW-Technologies/" target="_blank" rel="noreferrer">
    <img alt="Open live app" src="https://img.shields.io/badge/Live%20App-GitHub%20Pages-111827?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://sw-technologies-backend.onrender.com/api/health" target="_blank" rel="noreferrer">
    <img alt="API health" src="https://img.shields.io/badge/API-Health%20check-46C93A?style=for-the-badge&logo=render&logoColor=white" />
  </a>
</p>

### Admin panel

1. Open the **live site** above.  
2. Click **Login** in the navbar.  
3. Sign in using **`ADMIN_EMAIL`** and **`ADMIN_PASSWORD`** from **`Backend/.env`** (usually **lines 5–7**). These must match what you used when you ran `npm run seed` in `Backend/`.  
4. After a successful admin login you are sent to the admin area; you can also open **`admin.html`** from the navbar when logged in as admin.

Default values (same as `Backend/.env.example`):

| Field | Value |
|--------|--------|
| **Email** | `admin@swtech.com` |
| **Password** | `Admin@12345` |

> If login fails, confirm MongoDB is connected on Render, re-run `npm run seed` locally (or your seed process), and that `ADMIN_EMAIL` / `ADMIN_PASSWORD` in `Backend/.env` match the account you expect.

</div>

---

## Repository layout

- **`Frontend/`** — Round 1 static site (HTML/CSS/JS) + Round 2 API integration
- **`Backend/`** — Express + MongoDB + JWT + admin APIs

## Quick start (local, full-stack)

### 1) Configure backend env

```bash
cp Backend/.env.example Backend/.env
```

Update `Backend/.env`:

- `MONGODB_URI` — your MongoDB connection string  
- `JWT_SECRET` — long random string  
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — optional override before seed  

### 2) Install, seed, run

```bash
cd Backend
npm install
npm run seed
npm run dev
```

Open: `http://localhost:5001` (or your `PORT`).

## Docs

- **Frontend**: `Frontend/README.md`  
- **Backend** (live API docs): `Backend/README.md` — API base: [https://sw-technologies-backend.onrender.com](https://sw-technologies-backend.onrender.com)
