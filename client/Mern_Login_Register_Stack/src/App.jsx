import React from "react";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 10 * 1000,
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="Home" />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="services" element={<Services />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-left"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "1.2rem",
              userSelect: "none",
              maxWidth: "500px",
              border: "2px solid gray",
              padding: "10px 10px",
              backgroundColor: "white",
              color: "var(--color-gray-700)",
            },
          }}
        />
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;
