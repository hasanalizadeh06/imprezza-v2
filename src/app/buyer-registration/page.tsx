"use client";
import React, { useState } from "react";
import BuyerRegistrationForm from "./BuyerRegistrationForm";

export default function BuyerRegistrationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
        <BuyerRegistrationForm />
      </div>
    </div>
  );
}
