import React, { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import NotFound from "./pages/NotFound";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { theme } from "./helper/theme";
import { Box } from "@mui/material";

const Home = lazy(() => import("./pages/Home"));
const HotelInfo = lazy(() => import("./pages/HotelInfo"));

const queryClient = new QueryClient();

export default function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <AuthContextProvider>
          <Suspense fallback={<LoadingSkeleton />}>
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route
                  path="/hotels"
                  element={<PrivateRoute component={Home} />}
                />
                <Route
                  path="/hotels/:slug"
                  element={<PrivateRoute component={HotelInfo} />}
                />
                <Route
                  path="/my-profile"
                  element={<PrivateRoute component={MyProfile} />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </QueryClientProvider>
          </Suspense>
        </AuthContextProvider>
      </Box>
    </CssVarsProvider>
  );
}
