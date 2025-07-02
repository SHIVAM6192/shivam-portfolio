'use client'
import { use, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {

// const [isDarkMode, setIsDarkMode] = useState(false);

// // Set initial theme from localStorage or system
// useEffect(() => {
//   const storedTheme = localStorage.theme;
//   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//   if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
//     document.documentElement.classList.add('dark');
//     setIsDarkMode(true);
//   } else {
//     document.documentElement.classList.remove('dark');
//     setIsDarkMode(false);
//   }
// }, []);

// Update class and localStorage when user toggles
// useEffect(() => {
//   if (isDarkMode) {
//     document.documentElement.classList.add('dark');
//     localStorage.theme = 'dark';
//   } else {
//     document.documentElement.classList.remove('dark');
//     localStorage.theme = 'light'; // safer than ''
//   }
// }, [isDarkMode]);
  

  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Work />
    <Contact />
    <Footer />
    </>
  );
}
