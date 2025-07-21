import { createContext, useEffect, useState } from 'react'

export const AuthContex = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      setToken(savedToken)
    }
    setIsLoading(false) 
  }, [])

  const loginFn = (token) => {
    localStorage.setItem('token', token)
    setToken(token)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  const isAuthenticated = !!token

  return (
    <AuthContex.Provider
      value={{ token, loginFn, logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider
