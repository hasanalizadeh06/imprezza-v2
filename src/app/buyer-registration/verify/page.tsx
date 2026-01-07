"use client";
import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyPage() {
  return (
    <Suspense>
      <BuyerVerifyContent />
    </Suspense>
  );
}

import React from "react";
function BuyerVerifyContent() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token");
  const [missingToken, setMissingToken] = React.useState(false);

  useEffect(() => {
    if (token) {
      try {
        const user = JSON.parse(atob(token));
        localStorage.setItem("user_role", "buyer");
        localStorage.setItem("buyer_user", JSON.stringify(user));
        setTimeout(() => {
            router.replace("/dashboard");
        }, 4000);
      } catch {
        router.replace("/buyer-registration?error=invalid_token");
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
            <div className="text-lg font-semibold">Your account is being verified, please wait... </div>
          </>
        )}
      </div>
    </div>
  );
}
