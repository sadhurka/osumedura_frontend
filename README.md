Backend API requirements

- Endpoint: GET /products returns an array of product documents.
- Document fields: \_id, name, price, image, rating, reviews, category, inStock.
- Configure frontend with VITE_API_URL pointing to your backend base URL.

MongoDB import

Use the provided seed file to import initial data:

```
mongoimport --uri "mongodb://localhost:27017/pharmacy" \
  --collection products \
  --file seeds/products.json \
  --jsonArray
```

Environment setup

- Backend `.env` (copy backend/.env.example → backend/.env):

```
MONGODB_URI=mongodb://localhost:27017/pharmacy
PORT=3000
```

- Frontend `.env`:

```
VITE_API_URL=http://localhost:3000
```

Frontend usage

- The homepage fetches from `${VITE_API_URL}/products`.
- Ensure backend is running and accessible to avoid fetch errors.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
