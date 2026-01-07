
"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LandingContent from "../LandingContent";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const [modalState, setModalState] = useState<'open' | 'closing' | 'closed'>('closed');
  const router = useRouter();

  const handleSelect = (role: "buyer" | "artist" | "guest") => {
    if (role === "buyer") {
      router.push("/buyer-registration");
    } else if (role === "artist") {
      router.push("/artist-registration");
    } else {
      setModalState('closing');
      setTimeout(() => {
        setShowModal(false);
        setModalState('closed');
      }, 500);
    }
  };

  // Reopen modal when Login/Register is clicked from Navbar
  const handleLoginClick = useCallback(() => {
    setShowModal(true);
    setTimeout(() => setModalState('open'), 100);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-pink-300 rounded-full opacity-30 blur-2xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-blue-300 rounded-full opacity-30 blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-yellow-200 rounded-full opacity-20 blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-[180px] h-[180px] bg-green-200 rounded-full opacity-20 blur-2xl animate-pulse" />
        <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80" alt="art" width={128} height={128} className="absolute top-24 left-10 w-32 h-32 object-cover rounded-2xl shadow-xl opacity-70 rotate-6" />
        <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80" alt="gallery" width={144} height={144} className="absolute bottom-24 right-10 w-36 h-36 object-cover rounded-2xl shadow-xl opacity-70 -rotate-6" />
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${modalState === 'open' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div
            className="bg-gradient-to-br pt-20 from-white via-gray-50 to-blue-100 rounded-3xl shadow-2xl px-12 py-10 w-[85vw] max-w-4xl flex flex-row items-stretch gap-10 border-2 border-blue-200/40 relative transition-all duration-500"
            style={{
              transform: modalState === 'open' ? 'translateY(0)' : 'translateY(-80px)',
              opacity: modalState === 'open' ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)'
            }}
          >
            {/* Close (X) button */}
            <button
              className="absolute top-6 right-8 text-3xl text-gray-400 hover:text-gray-700 font-bold z-10 focus:outline-none"
              aria-label="Close"
              onClick={() => {
                setModalState('closing');
                setTimeout(() => {
                  setShowModal(false);
                  setModalState('closed');
                }, 500);
              }}
            >
              &times;
            </button>
            <h2 className="absolute top-6 w-full text-center left-1/2 -translate-x-1/2 text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">How Would You Like to Continue?</h2>
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
        </div>
      )}

      {/* Landing content with navbar, artists, buyers, artworks, info sections */}
      <LandingContent onLogin={handleLoginClick} />
    </div>
  );
}
