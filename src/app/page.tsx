import React from 'react'
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="mt-8 mb-4 flex justify-center">
        <Image
          src="/davinci_i_have_a_project__and_it_s_for_people_who_want_to_.png"
          alt="Logo"
          width={120}
          height={120}
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-2xl text-black font-bold mb-8">Template Selection</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link href="/template1" className="px-6 py-3 rounded-lg bg-purple-500 text-white text-center font-semibold shadow hover:bg-purple-600 transition">Template 1</Link>
        <Link href="/template2" className="px-6 py-3 rounded-lg bg-fuchsia-300 text-white text-center font-semibold shadow hover:bg-fuchsia-400 transition">Template 2</Link>
        <Link href="/template3" className="px-6 py-3 rounded-lg bg-pink-500 text-white text-center font-semibold shadow hover:bg-pink-600 transition">Template 3</Link>
      </div>
      {/* Available page links */}
      <div className="mt-16 w-full max-w-xs flex flex-col gap-2 items-center">
        <span className="text-xs text-gray-500 mb-2">Available Pages:</span>
        <div className="flex flex-wrap gap-2 justify-center">
          <Link href="/" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Home</Link>
          <Link href="/template1" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Template 1</Link>
          <Link href="/template2" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Template 2</Link>
          <Link href="/template3" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Template 3</Link>
          <Link href="/artist-registration" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Artist Registration</Link>
          <Link href="/buyer-registration" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Buyer Registration</Link>
          <Link href="/dashboard" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Dashboard</Link>
          <Link href="/artist/955505" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Artist</Link>
          <Link href="/artist-registration/verify" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Artist Verify</Link>
          <Link href="/buyer-registration/verify" className="px-3 py-1 rounded bg-gray-200 text-xs text-gray-700 hover:bg-gray-300 transition">Buyer Verify</Link>
        </div>
      </div>
    </div>
  );
}

export default page