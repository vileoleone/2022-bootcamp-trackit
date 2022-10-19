import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/Homepage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/cadastro" element={<RegistrationPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}