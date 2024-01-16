import React from "react";
import "./App.css";
import MainProducts from "./components/MainProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={query}>
      <MainProducts />
    </QueryClientProvider>
  );
}
