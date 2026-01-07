import React from "react";
import Link from "next/link";

export default function ArtistNavbar({ onLogin }: { onLogin?: () => void }) {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 shadow-md fixed top-0 left-0 z-40">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-extrabold text-blue-700 tracking-tight">Imprezza</Link>
      </div>
      <div className="flex gap-6 items-center">
        {onLogin && (
          <button className="text-blue-700 font-semibold hover:underline" onClick={onLogin}>Login / Register</button>
        )}
        <Link href="/#artists" className="text-gray-700 font-semibold hover:text-blue-700 transition">Artists</Link>
        <Link href="/#buyers" className="text-gray-700 font-semibold hover:text-blue-700 transition">Buyers</Link>
      </div>
    </nav>
  );
}
