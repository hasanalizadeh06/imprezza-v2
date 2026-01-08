"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [paintings, setPaintings] = useState<string[]>(["Starry Night", "Mona Lisa"]);
  const router = useRouter();

  useEffect(() => {
    let activeUser = null;
    try {
      activeUser = JSON.parse(localStorage.getItem("active_user") || "null");
    } catch {}
    if (activeUser) {
      setUser(activeUser);
      setRole(activeUser.role);
    } else {
      router.replace("/login");
    }
  }, [router]);

  // Navigation handlers
  const handleLogout = () => {
    localStorage.removeItem("active_user");
    setUser(null);
    setRole(null);
    router.replace("/login");
  };
  const handleEditProfile = () => {
    if (role === "artist") {
      router.push("/artist-registration?edit=1");
    } else {
      router.push("/buyer-registration?edit=1");
    }
  };
  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCategoriesOpen(false);
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  // Dummy categories for dropdown
  const categories = [
    "Painting", "Sculpture", "Photography", "Music", "Dance", "Writing", "Film", "Design"
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-100 flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full bg-white shadow flex items-center px-6 py-3 justify-between sticky top-0 z-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-600">
          <span className="inline-block w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">I</span>
          Imprezza
        </Link>
        {/* Search and Categories */}
        <div className="flex-1 flex items-center gap-4 ml-8">
          <form onSubmit={handleSearch} className="relative w-72 max-w-full">
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search artists, artworks..." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </button>
          </form>
          <div className="relative">
            <button onClick={() => setCategoriesOpen(v => !v)} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium">
              {selectedCategory ? selectedCategory : "Browse Categories"}
              <svg className={`w-4 h-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {categoriesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-30">
                {categories.map(cat => (
                  <button key={cat} onClick={() => handleCategorySelect(cat)} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">{cat}</button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Icons and Profile */}
        <div className="flex items-center gap-6 ml-4">
          {/* Messages */}
          <button className="relative p-2 rounded-full hover:bg-gray-100" onClick={() => alert('Go to messages')}>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
          </button>
          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-gray-100" onClick={() => alert('Go to notifications')}>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V4a2 2 0 1 0-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" /></svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">5</span>
          </button>
          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setProfileOpen(v => !v)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold uppercase">{user.firstName?.[0] || user.username?.[0]}{user.lastName?.[0] || ""}</span>
              <svg className={`w-4 h-4 transition-transform ${profileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-30">
                <button onClick={() => alert('Go to bookings')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">My Bookings</button>
                <button onClick={() => alert('Go to favorites')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">Favorites/Saved Artists</button>
                <button onClick={() => alert('Go to account settings')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">Account Settings</button>
                <button onClick={() => alert('Go to payment methods')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">Payment Methods</button>
                <button onClick={() => alert('Go to help & support')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">Help & Support</button>
                <div className="border-t border-gray-200 my-1" />
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-semibold">Log Out</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-12 px-4">
        {role === "artist" ? (
          <div className="w-full max-w-2xl bg-gradient-to-br from-red-100 to-red-400 rounded-2xl shadow-2xl p-8 flex flex-col items-center mt-8 border-4 border-red-500">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-6 shadow-lg border-4 border-white">
              <span className="text-4xl text-white font-bold uppercase drop-shadow-lg">{user.firstName?.[0] || user.username?.[0]}{user.lastName?.[0] || ""}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-red-800 mb-2 tracking-wide">{user.firstName ? `${user.firstName} ${user.lastName}` : user.username}</h2>
            <div className="text-red-600 font-bold mb-1 text-base uppercase tracking-wider">Artist</div>
            <div className="text-red-700 mb-4 text-lg">{user.email}</div>
            <div className="flex flex-col gap-2 w-full max-w-md mt-2">
              {Object.entries(user).map(([key, value]) => (
                key !== "firstName" && key !== "lastName" && key !== "email" && key !== "username" && value ? (
                  <div key={key} className="flex items-center justify-between bg-red-200 rounded-lg px-4 py-2">
                    <span className="font-semibold text-red-700 capitalize">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                    <span className="text-red-900 font-medium">{typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}</span>
                  </div>
                ) : null
              ))}
              <div className="flex items-center justify-between bg-red-200 rounded-lg px-4 py-2">
                <span className="font-semibold text-red-700">Username</span>
                <span className="text-red-900 font-medium">{user.username}</span>
              </div>
              <div className="flex items-center justify-between bg-red-200 rounded-lg px-4 py-2">
                <span className="font-semibold text-red-700">Full Name</span>
                <span className="text-red-900 font-medium">{user.firstName} {user.lastName}</span>
              </div>
              <div className="flex items-center justify-between bg-red-200 rounded-lg px-4 py-2">
                <span className="font-semibold text-red-700">Email</span>
                <span className="text-red-900 font-medium">{user.email}</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white font-bold shadow hover:from-red-700 hover:to-red-900 transition" onClick={handleEditProfile}>Edit Profile</button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center mt-8">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
              <span className="text-4xl text-white font-bold uppercase">{user.firstName?.[0]}{user.lastName?.[0]}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.firstName} {user.lastName}</h2>
            <div className="text-green-700 font-bold mb-1 text-base uppercase tracking-wider">Buyer</div>
            <div className="text-gray-600 mb-4">{user.email}</div>
            <div className="flex flex-col gap-2 w-full max-w-md mt-2">
              {Object.entries(user).map(([key, value]) => (
                key !== "firstName" && key !== "lastName" && key !== "email" && value ? (
                  <div key={key} className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2">
                    <span className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                    <span className="text-gray-900">{typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}</span>
                  </div>
                ) : null
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow hover:from-green-600 hover:to-blue-600 transition" onClick={handleEditProfile}>Edit Profile</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
