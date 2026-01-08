import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LandingContent({ onLogin, showNavbar = true }: { onLogin: () => void, showNavbar?: boolean }) {
  return (
    <div className="w-full">
      {/* Navbar */}
      {showNavbar && (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 shadow-md fixed top-0 left-0 z-40">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-blue-700 tracking-tight">Imprezza</span>
          </div>
          <div className="flex-1 flex justify-center">
            <input
              type="text"
              placeholder="Search artworks, artists..."
              className="w-80 px-4 py-2 rounded-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white shadow-sm"
            />
          </div>
          <div className="flex gap-6 items-center">
            <button className="text-blue-700 font-semibold hover:underline" onClick={onLogin}>Login / Register</button>
            <Link href="#artists" className="text-gray-700 font-semibold hover:text-blue-700 transition">Artists</Link>
            <Link href="#buyers" className="text-gray-700 font-semibold hover:text-blue-700 transition">Buyers</Link>
            <Link href="#faq" className="text-gray-700 font-semibold hover:text-blue-700 transition">FAQ</Link>
            <Link href="#support" className="text-gray-700 font-semibold hover:text-blue-700 transition">Support</Link>
            <Link href="#rules" className="text-gray-700 font-semibold hover:text-blue-700 transition">Rules</Link>
            <Link href="#blog" className="text-gray-700 font-semibold hover:text-blue-700 transition">Blog</Link>
          </div>
        </nav>
      )}
      <div className="pt-28" />
      {/* Artists Section */}
      <section id="artists" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Featured Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1,2,3,4,5].map((i) => (
            <a
              key={i}
              href={`/artist/${i === 1 ? '955507' : '95550' + i}`}
              className="block group"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl flex flex-col items-center border border-blue-200 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                {/* Colored top stripe */}
                <div className="w-full h-20 bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-300 flex items-center justify-center relative">
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-blue-300 flex items-center justify-center shadow-lg">
                    <Image src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} alt="Artist" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                  </div>
                </div>
                <div className="pt-16 pb-6 px-4 w-full flex flex-col items-center">
                  <h3 className="text-xl font-bold text-blue-700 mb-1">Artist Name {i}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full mb-2">Modern Art, Abstract</span>
                  <p className="text-gray-500 text-sm mb-2">10+ years experience</p>
                  <p className="text-gray-700 text-center mb-2 italic">"Art is not what you see, but what you make others see."</p>
                  <div className="flex gap-2 text-xs text-gray-500 mb-2">
                    <span>Followers: {1000 + i * 123}</span>
                    <span>•</span>
                    <span>Artworks: {20 + i * 3}</span>
                  </div>
                  <div className="w-full h-[1px] bg-blue-100 my-2" />
                  <div className="flex justify-between w-full text-xs text-gray-400">
                    <span>ID: 00{i}A</span>
                    <span>Joined: 20{12+i}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* Buyers Section */}
      {/* <section id="buyers" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-green-800">Top Buyers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="relative bg-white rounded-2xl shadow-2xl flex flex-col items-center border border-green-200 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="w-full h-20 bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-200 flex items-center justify-center relative">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-yellow-300 flex items-center justify-center shadow-lg">
                  <Image src={`https://randomuser.me/api/portraits/women/${i+30}.jpg`} alt="Buyer" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                </div>
              </div>
              <div className="pt-16 pb-6 px-4 w-full flex flex-col items-center">
                <h3 className="text-xl font-bold text-yellow-700 mb-1">Buyer Name {i}</h3>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full mb-2">Collector, Investor</span>
                <p className="text-gray-500 text-sm mb-2">Member since 20{15+i}</p>
                <p className="text-gray-700 text-center mb-2 italic">"Supporting art, supporting dreams."</p>
                <div className="flex gap-2 text-xs text-gray-500 mb-2">
                  <span>Purchases: {15 + i * 2}</span>
                  <span>•</span>
                  <span>Favorites: {5 + i}</span>
                </div>
                <div className="w-full h-[1px] bg-yellow-100 my-2" />
                <div className="flex justify-between w-full text-xs text-gray-400">
                  <span>ID: 00{i}B</span>
                  <span>Joined: 20{15+i}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      {/* Artworks Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-pink-800">Artworks Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example artworks with details */}
          {[
            {
              img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
              title: "Dreamscape",
              artist: "Ava Smith",
              avatar: "https://randomuser.me/api/portraits/women/32.jpg"
            },
            {
              img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
              title: "Urban Flow",
              artist: "Liam Chen",
              avatar: "https://randomuser.me/api/portraits/men/33.jpg"
            },
            {
              img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
              title: "Golden Hour",
              artist: "Sophia Lee",
              avatar: "https://randomuser.me/api/portraits/women/34.jpg"
            },
            {
              img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
              title: "Abstract Mind",
              artist: "Noah Patel",
              avatar: "https://randomuser.me/api/portraits/men/35.jpg"
            },
            {
              img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
              title: "Color Burst",
              artist: "Mia Garcia",
              avatar: "https://randomuser.me/api/portraits/women/36.jpg"
            },
            {
              img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              title: "Serenity",
              artist: "Ethan Kim",
              avatar: "https://randomuser.me/api/portraits/men/37.jpg"
            },
            {
              img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
              title: "Blue Harmony",
              artist: "Olivia Rossi",
              avatar: "https://randomuser.me/api/portraits/women/38.jpg"
            },
            {
              img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
              title: "Vivid Dreams",
              artist: "Lucas Wang",
              avatar: "https://randomuser.me/api/portraits/men/39.jpg"
            }
          ].map((art, i) => (
            <div key={i} className="relative bg-white rounded-2xl shadow-2xl border-2 border-pink-200 overflow-visible hover:scale-105 transition-transform duration-300 flex flex-col items-center group">
              {/* Artwork image fills the card */}
              <div className="w-full aspect-[4/3] relative">
                <Image src={art.img} alt={art.title} fill className="object-cover w-full h-full" />
                {/* Artist avatar bottom right, outside card */}
                <div className="absolute -bottom-6 -right-6 z-20">
                  <div className="w-16 h-16 rounded-full border-4 border-pink-300 shadow-lg bg-white flex items-center justify-center">
                    <Image src={art.avatar} alt={art.artist} width={56} height={56} className="w-14 h-14 rounded-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="pt-8 pb-6 px-4 w-full flex flex-col items-center">
                <h4 className="text-xl font-bold text-pink-700 mb-1">{art.title}</h4>
                <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full mb-2">by {art.artist}</span>
                <div className="w-full h-[1px] bg-pink-100 my-2" />
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition">View Artwork</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Info Sections */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">About Imprezza</h2>
        <p className="text-gray-700 mb-4">Imprezza is a platform connecting artists and buyers, making art accessible to everyone. Discover, buy, and showcase unique artworks from talented creators worldwide.</p>
        <p className="text-gray-700 mb-4">Our mission is to empower artists, inspire collectors, and build a vibrant art community. Whether you are an artist, a buyer, or just a guest, Imprezza welcomes you!</p>
      </section>
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Curated selection of original artworks</li>
          <li>Direct connection between artists and buyers</li>
          <li>Secure transactions and privacy</li>
          <li>Community events and exhibitions</li>
        </ul>
      </section>
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact & Support</h2>
        <p className="text-gray-700 mb-2">Have questions or need help? Reach out to our support team at <a href="mailto:support@imprezza.com" className="text-blue-700 underline">support@imprezza.com</a>.</p>
      </section>
    </div>
  );
}
