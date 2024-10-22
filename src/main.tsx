import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "@/router.tsx";
import setupAxios from "@/lib/axios-setup.ts";
import {ThemeProvider} from "@/providers/theme-provider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

setupAxios();

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light" storageKey="theme">
              <BrowserRouter>
                  <AppRouter />
              </BrowserRouter>
          </ThemeProvider>
      </QueryClientProvider>
  </StrictMode>,
)
