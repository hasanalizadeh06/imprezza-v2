"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArtistNavbar from "../ArtistNavbar";
import { redirect } from "next/navigation";

// Expanded dummy data for demonstration
const ARTISTS = [
  {
    id: "955507",
    name: "Ava Smith",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    wallpaper: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    logo: "https://randomuser.me/api/portraits/men/21.jpg",
    job: "Modern Art, Abstract",
    experience: 12,
    bio: "Ava Smith is a visionary artist blending modern and abstract styles. Her works have been exhibited worldwide.",
    skills: ["Oil Painting", "Digital Art", "Sculpture", "Mixed Media"],
    works: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    ],
    contact: {
      email: "ava.smith@imprezza.com",
      phone: "+1 555 123 4567",
      instagram: "@ava.smith.art"
    },
    rating: 4.8,
    reviews: [
      { user: "Lucas Wang", comment: "Amazing creativity and detail!", rating: 5 },
      { user: "Sophia Lee", comment: "Loved the colors and composition.", rating: 4.5 }
    ]
  },
  {
    id: "955502",
    name: "Liam Chen",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    wallpaper: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    logo: "https://randomuser.me/api/portraits/men/22.jpg",
    job: "Urban Art, Graffiti",
    experience: 8,
    bio: "Liam Chen is known for his vibrant urban murals and graffiti art, bringing city walls to life.",
    skills: ["Graffiti", "Spray Paint", "Mural Art"],
    works: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
    ],
    contact: {
      email: "liam.chen@imprezza.com",
      phone: "+1 555 234 5678",
      instagram: "@liam.chen.urban"
    },
    rating: 4.6,
    reviews: [
      { user: "Ava Smith", comment: "Urban vibes are amazing!", rating: 4.5 },
      { user: "Mia Garcia", comment: "Love the energy in his work.", rating: 4.7 }
    ]
  },
  {
    id: "955503",
    name: "Sophia Lee",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    wallpaper: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    logo: "https://randomuser.me/api/portraits/women/23.jpg",
    job: "Landscape, Nature",
    experience: 15,
    bio: "Sophia Lee captures the beauty of nature in her breathtaking landscape paintings.",
    skills: ["Landscape Painting", "Watercolor", "Oil Painting"],
    works: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
    ],
    contact: {
      email: "sophia.lee@imprezza.com",
      phone: "+1 555 345 6789",
      instagram: "@sophia.lee.art"
    },
    rating: 4.9,
    reviews: [
      { user: "Ethan Kim", comment: "Her landscapes are so peaceful!", rating: 5 },
      { user: "Lucas Wang", comment: "Nature comes alive in her art.", rating: 4.8 }
    ]
  },
  {
    id: "955504",
    name: "Noah Patel",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    wallpaper: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    logo: "https://randomuser.me/api/portraits/men/24.jpg",
    job: "Abstract, Mixed Media",
    experience: 10,
    bio: "Noah Patel experiments with abstract forms and mixed media, creating thought-provoking pieces.",
    skills: ["Abstract Art", "Mixed Media", "Collage"],
    works: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
    ],
    contact: {
      email: "noah.patel@imprezza.com",
      phone: "+1 555 456 7890",
      instagram: "@noah.patel.abstract"
    },
    rating: 4.7,
    reviews: [
      { user: "Ava Smith", comment: "Very creative and unique!", rating: 4.7 },
      { user: "Sophia Lee", comment: "Love the mixed media approach.", rating: 4.6 }
    ]
  },
  {
    id: "955505",
    name: "Mia Garcia",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    wallpaper: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    logo: "https://randomuser.me/api/portraits/women/25.jpg",
    job: "Colorist, Pop Art",
    experience: 7,
    bio: "Mia Garcia is a colorist and pop artist, known for her bold palettes and playful compositions.",
    skills: ["Pop Art", "Color Theory", "Digital Art"],
    works: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    ],
    contact: {
      email: "mia.garcia@imprezza.com",
      phone: "+1 555 567 8901",
      instagram: "@mia.garcia.popart"
    },
    rating: 4.5,
    reviews: [
      { user: "Noah Patel", comment: "Her colors are so vibrant!", rating: 4.5 },
      { user: "Liam Chen", comment: "Fun and energetic art.", rating: 4.4 }
    ]
  }
];


export default function ArtistPage({ params }: { params: Promise<{ id: string }> }) {
  const [showLogin, setShowLogin] = useState(false);
  const { id } = React.use(params);
  const artist = ARTISTS.find(a => a.id === id) || ARTISTS[0];

  // Modal component (simple, matches your modal style)
  function LoginModal({ onClose }: { onClose: () => void }) {
    // ModalState for animation (optional, can be improved)
    const [modalState, setModalState] = useState<'open' | 'closing'>('open');
    const handleClose = () => {
      setModalState('closing');
      setTimeout(onClose, 400);
    };
    const handleSelect = (role: "buyer" | "artist" | "guest") => {
      if (role === "buyer") {
        window.location.href = "/buyer-registration";
      } else if (role === "artist") {
        window.location.href = "/artist-registration";
      } else {
        handleClose();
      }
    };
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${modalState === 'open' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div
          className="bg-gradient-to-br pt-20 from-white via-gray-50 to-blue-100 rounded-3xl shadow-2xl px-12 py-10 w-[85vw] max-w-6xl flex flex-row items-stretch gap-10 border-2 border-blue-200/40 relative transition-all duration-500"
          style={{
            transform: modalState === 'open' ? 'translateY(0)' : 'translateY(-80px)',
            opacity: modalState === 'open' ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)'
          }}
        >
          <button className="absolute top-6 right-8 text-3xl text-gray-400 hover:text-black font-bold" onClick={handleClose}>&times;</button>
          <h2 className="absolute top-6 left-1/2 -translate-x-1/2 text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">How Would You Like to Continue?</h2>
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
          {/* Guest Card */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-tl from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-lg p-8 mx-2 border-2 border-yellow-300/30 hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer group" onClick={() => handleSelect("guest") }>
            <div className="bg-yellow-400 group-hover:bg-yellow-500 transition-colors duration-200 w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </div>
            <span className="text-2xl font-bold mb-2 text-yellow-800">Guest</span>
              <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&q=80" alt="Guest" width={128} height={128} className="w-32 h-32 object-cover rounded-xl mb-4 shadow-lg border-4 border-yellow-200" />
            <p className="text-center text-gray-700 mb-4">Browse as a guest, discover artists and artworks without registration.</p>
            <button className="w-full py-3 px-6 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition text-lg font-semibold shadow group-hover:shadow-xl">Continue as Guest</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navbar */}
      <ArtistNavbar onLogin={() => setShowLogin(true)} />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      <div className="pt-16" />
      {/* Wallpaper */}
      <div className="relative w-full h-64 md:h-80 bg-gray-200">
        <Image src={artist.wallpaper} alt="Wallpaper" width={1200} height={320} className="w-full h-full object-cover" />
        {/* Avatar overlays wallpaper */}
        <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 z-10">
          <Image src={artist.avatar} alt="Avatar" width={176} height={176} className="w-36 h-36 md:w-44 md:h-44 rounded-full border-8 border-white shadow-xl object-cover" />
        </div>
      </div>
      {/* Artist Info */}
      <div className="mt-20 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl mt-3 font-extrabold text-blue-800 mb-2 flex items-center gap-2">
          {artist.name}
        </h1>
        <span className="text-lg text-blue-600 font-semibold mb-2">{artist.job}</span>
        <span className="text-gray-500 mb-2">{artist.experience} years experience</span>
        <p className="max-w-2xl text-gray-700 mb-4">{artist.bio}</p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {artist.skills.map(skill => (
            <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{skill}</span>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-500 text-xl">★</span>
          <span className="font-bold text-lg">{artist.rating}</span>
          <span className="text-gray-500">({artist.reviews.length} reviews)</span>
        </div>
      </div>
      {/* Works */}
      <div className="max-w-4xl mx-auto mt-10 mb-8 px-4">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Artworks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artist.works.map((img, i) => (
            <Image key={i} src={img} alt="Artwork" width={400} height={192} className="rounded-xl shadow-lg object-cover w-full h-48" />
          ))}
        </div>
      </div>
      {/* Contact & Reviews */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        {/* Contact */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Contact</h3>
          <div className="mb-2"><span className="font-semibold">Email:</span> <a href={`mailto:${artist.contact.email}`} className="text-blue-600 underline">{artist.contact.email}</a></div>
          <div className="mb-2"><span className="font-semibold">Phone:</span> <a href={`tel:${artist.contact.phone}`} className="text-blue-600 underline">{artist.contact.phone}</a></div>
          <div className="mb-2"><span className="font-semibold">Instagram:</span> <a href={`https://instagram.com/${artist.contact.instagram.replace('@','')}`} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{artist.contact.instagram}</a></div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition" onClick={() => setShowLogin(true)}>Contact Artist</button>
        </div>
        {/* Reviews */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Reviews</h3>
          {artist.reviews.map((r, i) => (
            <div key={i} className="mb-4 border-b border-gray-100 pb-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-800">{r.user}</span>
                <span className="text-yellow-500">{'★'.repeat(Math.round(r.rating))}</span>
                <span className="text-xs text-gray-400">{r.rating}</span>
              </div>
              <p className="text-gray-700 italic">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Buy Button */}
      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 bg-pink-600 text-white rounded-xl text-lg font-bold shadow hover:bg-pink-700 transition" onClick={() => redirect("/buyer-registration")}> {/* //onClick={() => setShowLogin(true)} */}
          Buy from this Artist
        </button>
      </div>
    </div>
  );
}
