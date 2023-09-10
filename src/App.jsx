import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
