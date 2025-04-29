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
import { PostLayout } from "./components/Layouts/PostLayout";
import Posts from "./components/Pages/Posts";
import { PostDetails } from "./components/Pages/PostDetails";

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
    {/* ========== post layout ======= */}
    <Route path="postLayout" element={<PostLayout/>}>
      <Route index element={<Posts/>}/>
      <Route path="posts/:postId" element={<PostDetails/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </PrimeReactProvider>
  
)
