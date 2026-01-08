"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LandingContent from "../LandingContent";

export default function Home() {
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 500) {
  //       setShowNavbar(true);
  //     } else {
  //       setShowNavbar(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const handleSelect = (role: "buyer" | "artist" | "guest") => {
    if (role === "buyer") {
      router.push("/buyer-registration");
    } else if (role === "artist") {
      router.push("/artist-registration");
    }
  };

  const handleLoginClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="relative min-h-screen pt-10 w-full flex flex-col items-center justify-start bg-gradient-to-br from-pink-200 via-blue-100 to-yellow-100 overflow-hidden">
      {/* Decorative background */}
      
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-pink-400 via-pink-200 to-yellow-200 rounded-full opacity-40 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 via-blue-200 to-green-200 rounded-full opacity-40 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-[220px] h-[220px] bg-gradient-to-br from-yellow-300 via-yellow-100 to-pink-100 rounded-full opacity-30 blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-[200px] h-[200px] bg-gradient-to-tr from-green-300 via-green-100 to-blue-100 rounded-full opacity-20 blur-2xl animate-pulse" />
        <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80" alt="art" width={128} height={128} className="absolute top-24 left-10 w-32 h-32 object-cover rounded-2xl shadow-xl opacity-70 rotate-6" />
        <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80" alt="gallery" width={144} height={144} className="absolute bottom-24 right-10 w-36 h-36 object-cover rounded-2xl shadow-xl opacity-70 -rotate-6" />
      </div>

      {/* Logo and title */}
      <header className="w-full flex flex-col items-center justify-center mt-10 mb-2 select-none">
        <div className="flex items-center gap-3">
          <span className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse">imprezza</span>
          <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 via-blue-400 to-yellow-300 shadow-lg animate-bounce" />
        </div>
        <p className="mt-2 text-lg md:text-xl font-medium text-gray-700 drop-shadow-sm tracking-wide">The new address of art</p>
      </header>

      {/* Question and cards */}
      <section className="w-full flex flex-col items-center justify-center pt-2 pb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg mb-8 mt-2">How would you like to continue?</h2>
        <div className="w-full max-w-4xl flex flex-row items-stretch gap-10 px-4">
          {/* Buyer Card */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-tl from-blue-100 via-white to-blue-200 rounded-2xl shadow-lg p-8 mx-2 border-2 border-blue-300/30 hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer group" onClick={() => handleSelect("buyer") }>
            <div className="bg-blue-600 group-hover:bg-blue-700 transition-colors duration-200 w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 3.13a4 4 0 010 7.75M12 7v4m0 0l-2-2m2 2l2-2" /></svg>
            </div>
            <span className="text-2xl font-bold mb-2 text-blue-800">Buyer</span>
            <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80" alt="Buyer" width={128} height={128} className="w-32 h-32 object-cover rounded-xl mb-4 shadow-lg border-4 border-blue-200" />
            <p className="text-center text-gray-700 mb-4">Discover, purchase, and grow your art collection.</p>
            <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow group-hover:shadow-xl">Register as Buyer</button>
          </div>
          {/* Artist Card */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-tl from-green-100 via-white to-green-200 rounded-2xl shadow-lg p-8 mx-2 border-2 border-green-300/30 hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer group" onClick={() => handleSelect("artist") }>
            <div className="bg-green-600 group-hover:bg-green-700 transition-colors duration-200 w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3" /></svg>
            </div>
            <span className="text-2xl font-bold mb-2 text-green-800">Artist</span>
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80" alt="Artist" width={128} height={128} className="w-32 h-32 object-cover rounded-xl mb-4 shadow-lg border-4 border-green-200" />
            <p className="text-center text-gray-700 mb-4">Showcase your art, reach new audiences, and grow your brand.</p>
            <button className="w-full py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-lg font-semibold shadow group-hover:shadow-xl">Register as Artist</button>
          </div>
        </div>
      </section>

      {/* Landing content with navbar, artists, buyers, artworks, info sections */}
        <LandingContent onLogin={handleLoginClick} showNavbar={showNavbar} />
    </div>
  );
}
