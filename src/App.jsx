import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Van from "./Components/Van";
import Vandetails from "./Components/Vandetails";
import Host from "./Components/Host";
import Dashboard from "./Components/Dashboard";
import IncomePage from "./Components/IncomePage";
import VanDash from "./Components/VanDash";
import ReviewDash from "./Components/ReviewDash";

import Notfound from "./Components/Notfound";
import Dashvandetails from "./Components/Dashvandetails";
import Details from "./Components/Details";
import Pricing from "./Components/Pricing";
import Photos from "./Components/Photos";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { useEffect, useState } from "react";



function App() {
  const [DeferredPrompt, setDeferredPrompt] = useState("")
  useEffect(() => {
    if ("ServiceWorker" in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          })
      })
    }
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
    // console.log();
  })
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/van" element={<Navigate to="/vans" />} />
          <Route path="/signup" element={<Navigate to="/signin" />} />
          <Route path="/host/van" element={<Navigate to="/host/vans" />} />
          <Route
            path="/host/review"
            element={<Navigate to="/host/reviews" />}
          />
          <Route
            path="/host/incomes"
            element={<Navigate to="/host/income" />}
          />

          <Route path="/host" element={<Host />}>
            <Route path="/host" element={<Navigate to="/host/dashboard" />} />
            <Route path="/host/dashboard" element={<Dashboard />} />
            <Route path="/host/income" element={<IncomePage />} />
            <Route path="/host/reviews" element={<ReviewDash />} />
            <Route path="/host/vans" element={<VanDash />} />


            <Route path="/host/vans/:id" element={<Dashvandetails />}>
              <Route path="/host/vans/:id" element={<Navigate to="details" />} />
              <Route path="details" element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="/api/vans/:id" element={<Vandetails />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
