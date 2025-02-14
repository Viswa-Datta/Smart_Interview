import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PublicLayout } from "@/layouts/public-layouts"
import { MainLayout } from "@/layouts/main-layout"
import ProtectedRoute from "@/layouts/protected-routes"
import AuthenticationLayout from "@/layouts/auth-layout"

import HomePage from "@/routes/home"
import SignInPage from "@/routes/sign-in"
import SignUpPage from "@/routes/sign-up"



const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route element={<PublicLayout />}>
                    <Route index element={<HomePage />} />
                </ Route>

                {/* Authentication layout */}
                <Route element={<AuthenticationLayout />}>
                    <Route path="/signin/*" element={<SignInPage />} />
                    <Route path="/signup/*" element={<SignUpPage />} />
                </ Route>

                {/* protected routes */}
                <Route 
                    element={<ProtectedRoute>
                        <MainLayout />
                    </ProtectedRoute>
                }>
                    
                </Route>
            </Routes>
        </Router>
    )
}

export default App
