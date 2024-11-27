import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //use server only localhost testing
  // server: {
  //   proxy: {
  //     "/dealerships": "http://localhost:3001",
  //     "/dealerregistration": "http://localhost:3001",
  //     "/dealerlogin": "http://localhost:3001",
  //   },
  // },
});
