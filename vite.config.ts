import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //use server only localhost testing
  server: {
    proxy: {
      "/product/admin/accept-dealer/:email": "http://localhost:3001",
      "/dealerships": "http://localhost:3001",
      "/product/dealerregistration": "http://localhost:3001",
      "/product/dealerlogin": "http://localhost:3001",
      "/product/dealerlogout": "http://localhost:3001",
    },
  },
  define: {
    "process.env": process.env,
  },
});
