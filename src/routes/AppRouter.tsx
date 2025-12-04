import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Checkout from "../pages/Checkout"
export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/checkout" element={ <Checkout />} />
        </Routes>
    </BrowserRouter>
  )
}
