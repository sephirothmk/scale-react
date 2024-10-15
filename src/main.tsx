import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "@/router.tsx";
import setupAxios from "@/lib/axios-setup.ts";
import {ThemeProvider} from "@/providers/theme-provider.tsx";

setupAxios();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="theme">
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
      </ThemeProvider>
  </StrictMode>,
)
