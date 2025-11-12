import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Members from "./components/pages/Members";
import Statistics from "./components/pages/Statistics";
import NotFound from "./components/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <div className="App" style={{ width: "100%" }}>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </QueryClientProvider>
  </div>
);

export default App;
