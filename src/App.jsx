import React, { useState, useEffect } from 'react';
import Preloader from './Home/Preloader';
import Navbar from './Home/Navbar';
import Main from './Home/Main';
import Footer from './Home/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full min-h-screen flex flex-col bg-[#050505]">
      <Preloader isLoading={isLoading} />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;