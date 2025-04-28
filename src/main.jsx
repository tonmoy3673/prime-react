import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home} from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { RootLayout } from "./components/Layouts/RootLayout";
import './index.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Default theme
// import 'primereact/resources/primereact.min.css'; // Core styles
// import 'primeicons/primeicons.css'; // PrimeIcons for icons
import { PrimeReactProvider } from "primereact/api";
import UserDetails from "./components/Pages/UserDetails";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <PrimeReactProvider>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<RootLayout/>}>
    <Route index  element={<Home/>}/>
    <Route path="users/:userId" element={<UserDetails/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </PrimeReactProvider>
  
)
