<div align="center">

# SW Technologies — Full Stack (Frontend + Backend)

**Live app**: [https://nikky-kumar7505.github.io/SW-Technologies/](https://nikky-kumar7505.github.io/SW-Technologies/)

The deployed site is the **same frontend** (HTML/CSS/JS), wired to the **live backend API** (contact, newsletter, quote modal, login/register, profile, admin). Update the API base URL in `Frontend/assets/js/config.js` if you point the UI at a different server.

<p>
  <a href="https://jocular-madeleine-5f5699.netlify.app/" target="_blank" rel="noreferrer">
    <img alt="Open live app" src="https://img.shields.io/badge/Live%20App-Open%20Site-111827?style=for-the-badge&logo=googlechrome&logoColor=white" />
  </a>
  <a href="https://sw-technologies-backend.onrender.com/api/health" target="_blank" rel="noreferrer">
    <img alt="API health" src="https://img.shields.io/badge/API-Health%20check-46C93A?style=for-the-badge&logo=render&logoColor=white" />
  </a>
</p>

### Demo admin (seed / `.env`)

Use these to sign in on **Login** and open **Admin** (change them in production):

| Field | Value |
|--------|--------|
| **Email** | `admin@swtech.com` |
| **Password** | `Admin@12345` |

> Set the same values in `Backend/.env` as `ADMIN_EMAIL` / `ADMIN_PASSWORD`, then run `npm run seed` in `Backend/` so the admin user exists in MongoDB.

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
