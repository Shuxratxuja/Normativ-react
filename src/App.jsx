import { Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react"
import AuthProvider, { AuthContex } from "./context/AuthContext"
import AuthLayout from "./pages/auth/AuthLayout"
import RootLayout from "./root/RootLayout"
import Main from "./components/Main/Main"
import Login from "./pages/auth/forms/Login"
import Register from "./pages/auth/forms/Register"
import Wishlist from "./pages/Wishlist/Wishlist"
import CartPage from "./pages/CartPage/CartPage"
import Checkout from "./pages/Checkout/Checkout"
import AccountPage from "./pages/Account/AccountPage"
import NotFoundPage from "./pages/NotFound/NotFoundPage"
import AboutPage from "./pages/About/AboutPage"
import ContactPage from "./pages/Contact/ContactPage"
import ProductPage from "./pages/ProductDeteil/ProductPage"



const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContex)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? children : <Navigate to="/login" />
}
function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Login/>} />
          <Route path="/login" element={<Register/>} />
        </Route>
        <Route element={<PrivateRoute>
          <RootLayout />
        </PrivateRoute>}>
          <Route index path="/" element={<Main/>} />
          <Route  path="/wishlist" element={<Wishlist/>} />
          <Route  path="/cart" element={<CartPage/>} />
          <Route  path="/checkout" element={<Checkout/>} />
          <Route  path="/account" element={<AccountPage/>} />
          <Route  path="/about" element={<AboutPage/>} />
          <Route  path="/product" element={<ProductPage/>} />
          <Route  path="/contact" element={<ContactPage/>} />
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
