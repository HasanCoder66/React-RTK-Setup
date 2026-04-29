// import React, { useState } from "react";

// // Dashboard

// // Main Auth UI
// export default function AuthUI() {
//   const [view, setView] = useState("login");
//   const [user, setUser] = useState(null);


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
//       {view === "login" && (
//         <Login
//           onSwitch={() => setView("signup")}
//           onLogin={handleLogin}
//         />
//       )}

//       {view === "signup" && (
//         <Signup
//           onSwitch={() => setView("login")}
//           onSignup={handleSignup}
//         />
//       )}

//       {view === "dashboard" && (
//         <Dashboard user={user} onLogout={handleLogout} />
//       )}
//     </div>
//   );
// }

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>App</div>} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />{" "}
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />{" "}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
