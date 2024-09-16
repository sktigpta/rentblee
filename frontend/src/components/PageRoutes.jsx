import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import GoogleSignin from "./GoogleSignIn"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { Logout } from "./Logout"
import ForgotPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword"
import BusinessRegistration from "../pages/business/BusinessRegistration"
import ProductPage from "../pages/product/ProductPage"
import BusinessDashboard from "../pages/business/BusinessDashboard"
import BusinessPage from "../pages/business/BusinessPage"
import CategoryPage from "../pages/CategoryPage"
import { ProfilePage } from "../pages/ProfilePage"


export const PageRoutes = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/logout" element={<Logout />} />


                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset/:token" element={<ResetPassword />} />


                    <Route path="/business-registration" element={<BusinessRegistration />} />
                    <Route path="/business-dashboard" element={<BusinessDashboard />} />


                    <Route path="/category/:categoryId" element={<CategoryPage />} />
                    <Route path="/business/:businessId" element={<BusinessPage />} />
                    <Route path="/product/:productId" element={<ProductPage />} />

                </Routes>
            </main>
        </>
    )
}