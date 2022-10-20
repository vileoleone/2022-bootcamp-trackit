import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/Homepage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/Today"
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/cadastro" element={<RegistrationPage />}></Route>
                <Route path="/Habitos" element={<HabitsPage />}></Route>
                <Route path="/Hoje" element={<TodayPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}