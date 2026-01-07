"use client";
import React, { useState } from "react";
import { Step1Account, Step2Profile, Step3Security, Step4Verify } from "./steps";

const steps = [
  "Account Creation",
  "Profile Setup",
  "Security",
  "Email Verification"
];

export default function BuyerRegistrationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profilePic: null as File | null,
    password: "",
    confirmPassword: "",
    terms: false,
    privacy: false,
    emailSent: false
  });

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const update = (fields: Partial<typeof form>) => setForm((f) => ({ ...f, ...fields }));

  return (
    <div>
      <div className="flex items-center justify-center mb-8">
        {steps.map((label, i) => (
          <div key={i} className="flex items-center">
            <div className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-white ${step >= i ? "bg-blue-600" : "bg-gray-300"}`}>{i + 1}</div>
            {i < steps.length - 1 && <div className="w-8 h-1 bg-gray-300 mx-2" />}
          </div>
        ))}
      </div>
      {step === 0 && <Step1Account form={form} update={update} next={next} />}
      {step === 1 && <Step2Profile form={form} update={update} next={next} back={back} />}
      {step === 2 && <Step3Security form={form} update={update} next={next} back={back} />}
      {step === 3 && <Step4Verify form={form} back={back} />}
    </div>
  );
}
