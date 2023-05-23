import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Views/Home"
import { About } from "./Views/About"
import { Settings } from "./Views/Settings"

export const Body =() =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={
                <Home />
            } />
            <Route path="/about" element={
                <About />
            } />
            <Route path="/settings" element={
                <Settings />
            } />
        </Routes>
        </BrowserRouter>
    )
}