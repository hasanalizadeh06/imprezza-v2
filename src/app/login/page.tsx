"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  type User = {
    email: string;
    password: string;
    [key: string]: any;
  };

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    let users: User[] = [];
    try {
      users = JSON.parse(localStorage.getItem("users") || "[]");
    } catch {}
    const foundUser = users.find((u: User) => u.email === email && u.password === password);
    if (foundUser) {
      localStorage.setItem("active_user", JSON.stringify(foundUser));
      router.replace("/dashboard");
      return;
    }
    setError("Email or password is incorrect, or account not verified.");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <div>
          <label className="block mb-1 font-semibold text-black">Email</label>
          <input
            type="email"
            className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-black">Password</label>
          <input
            type="password"
            className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="text-red-600 text-sm font-medium text-center">{error}</div>}
        <button type="submit" className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-2 rounded shadow-md hover:from-green-600 hover:via-blue-600 hover:to-purple-600 font-semibold transition-colors duration-200">Login</button>
      {/* Sign up link */}
      <div className="mt-6 text-center text-sm text-gray-700">
        Don't have an account?{' '}
        <Link href="/register" className="text-blue-600 hover:underline font-semibold">Sign up</Link>
      </div>
      </form>
    </div>
  );
}

export default LoginPage;