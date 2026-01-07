"use client";
import React, { useState } from "react";
import { Step1Artist, Step2ArtistProfile, Step3ArtistSecurity, Step4ArtistVerify } from "./steps";

const steps = [
  "Basic Information",
  "Profile Photo",
  "Security",
  "Verification"
];

export default function ArtistRegistrationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    profession: "",
    specialty: "",
    email: "",
    phone: "",
    profilePic: null as File | null,
    password: "",
    confirmPassword: "",
    terms: false,
    commission: false,
    emailCode: "",
    phoneCode: "",
    verified: false
  });

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const update = (fields: Partial<typeof form>) => setForm((f) => ({ ...f, ...fields }));

  return (
    <div>
      <div className="flex items-center justify-center mb-8">
        {steps.map((label, i) => (
          <div key={i} className="flex items-center">
            <div className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-white transition-colors duration-200 
              ${step === i ? "bg-green-600" : step > i ? "bg-green-400" : "bg-gray-300"}
            `}>{i + 1}</div>
            {i < steps.length - 1 && (
              <div className={`w-8 h-1 mx-2 rounded transition-colors duration-200 
                ${step > i ? "bg-green-400" : "bg-gray-300"}
              `} />
            )}
          </div>
        ))}
      </div>
      {step === 0 && <Step1Artist form={form} update={update} next={next} />}
      {step === 1 && <Step2ArtistProfile form={form} update={update} next={next} back={back} />}
      {step === 2 && <Step3ArtistSecurity form={form} update={update} next={next} back={back} />}
      {step === 3 && <Step4ArtistVerify form={form} update={update} back={back} />}
    </div>
  );
}
