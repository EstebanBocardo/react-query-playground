import React from "react";
import "./App.css";
import Main from "./domains/Main";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import SimpleQuery from "./domains/SimpleQuery";
import PaginatedQuery from "./domains/PaginatedQuery";
import InfiniteQuery from "./domains/InfiniteQuery";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="simpleQuery" element={<SimpleQuery />} />
          <Route path="paginatedQuery" element={<PaginatedQuery />} />
          <Route path="infiniteQuery" element={<InfiniteQuery />} />
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
