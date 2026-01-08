"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ArtistVerifyPage() {
  return (
    <Suspense>
      <ArtistVerifyContent />
    </Suspense>
  );
}

function ArtistVerifyContent() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token");
  const [missingToken, setMissingToken] = useState(false);

  useEffect(() => {
    if (token) {
      try {
        const decoded = JSON.parse(atob(token));
        decoded.role = "artist";
        // If password is missing, try to get from temp localStorage (if set during registration)
        if (!decoded.password) {
          try {
            const tempPass = localStorage.getItem("artist_temp_password");
            if (tempPass) decoded.password = tempPass;
          } catch {}
        }
        // Get users array from localStorage
        let users = [];
        try {
          users = JSON.parse(localStorage.getItem("users") || "[]");
        } catch {}
        // Check if user already exists (by email)
        const exists = users.some(u => u.email === decoded.email && u.role === "artist");
        if (!exists) {
          users.push(decoded);
        }
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("active_user", JSON.stringify(decoded));
        setTimeout(() => {
          router.replace("/dashboard");
        }, 2500);
      } catch {
        // Invalid token
      }
    } else {
      setMissingToken(true);
    }
  }, [token, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-100">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg flex flex-col items-center">
        {missingToken ? (
          <>
            <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" /></svg>
            <h1 className="text-2xl font-bold text-red-700 mb-2">Verification token not found!</h1>
            <div className="text-gray-700 text-center mb-4">Please make sure your verification link contains a token.</div>
          </>
        ) : (
          <>
            <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <h1 className="text-2xl font-bold text-green-700 mb-2">Account Activated!</h1>
            <div className="text-gray-700 text-center mb-4">Your artist account is now active.<br />You are being redirected to your dashboard...</div>
            <div className="text-xs text-gray-400">If you are not redirected, <button className="underline text-blue-600" onClick={() => router.replace("/dashboard")}>click here</button>.</div>
          </>
        )}
      </div>
    </div>
  );
}
