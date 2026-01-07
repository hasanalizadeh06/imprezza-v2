"use client";
import React, { useRef, useState, ChangeEvent, FormEvent, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

type BuyerForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePic: File | null;
  password: string;
  confirmPassword: string;
  terms: boolean;
  privacy: boolean;
  emailSent?: boolean;
};

type Step1Props = {
  form: BuyerForm;
  update: (fields: Partial<BuyerForm>) => void;
  next: () => void;
};
type Step2Props = {
  form: BuyerForm;
  update: (fields: Partial<BuyerForm>) => void;
  next: () => void;
  back: () => void;
};
type Step3Props = {
  form: BuyerForm;
  update: (fields: Partial<BuyerForm>) => void;
  next: () => void;
  back: () => void;
};
type Step4Props = {
  form: BuyerForm;
  back: () => void;
};

export function Step1Account({ form, update, next }: Step1Props) {
  type Errors = Partial<Record<keyof BuyerForm, string>>;
  const [errors, setErrors] = useState<Errors>({});

  function validate() {
    const errs: Errors = {};
    if (!form.firstName) errs.firstName = "Name required";
    if (!form.lastName) errs.lastName = "Last name required";
    if (!form.email) errs.email = "Email required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone) errs.phone = "Phone required";
    else if (!/^\+?\d{10,15}$/.test(form.phone)) errs.phone = "Invalid phone";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleNext(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validate()) next();
  }

  return (
    <form onSubmit={handleNext} className="space-y-6">
      <div>
        <label className="block mb-1 font-semibold text-black">Name *</label>
        <input className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.firstName} onChange={e => update({ firstName: e.target.value })} />
        {errors.firstName && <div className="text-red-600 text-sm font-medium">{errors.firstName}</div>}
      </div>
      <div>
        <label className="block mb-1 font-semibold text-black">Last name *</label>
        <input className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.lastName} onChange={e => update({ lastName: e.target.value })} />
        {errors.lastName && <div className="text-red-600 text-sm font-medium">{errors.lastName}</div>}
      </div>
      <div>
        <label className="block mb-1 font-semibold text-black">Email *</label>
        <input className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.email} onChange={e => update({ email: e.target.value })} />
        {errors.email && <div className="text-red-600 text-sm font-medium">{errors.email}</div>}
      </div>
      <div>
        <label className="block mb-1 font-semibold text-black">Phone *</label>
        <input className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.phone} onChange={e => update({ phone: e.target.value })} placeholder="+905xxxxxxxxx" />
        {errors.phone && <div className="text-red-600 text-sm font-medium">{errors.phone}</div>}
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded shadow-md hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 font-semibold transition-colors duration-200">Next</button>
    </form>
  );
}

export function Step2Profile({ form, update, next, back }: Step2Props) {
  const [preview, setPreview] = useState<string | null>(form.profilePic ? URL.createObjectURL(form.profilePic) : null);
  const fileInput = useRef<HTMLInputElement>(null);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      update({ profilePic: file });
      setPreview(URL.createObjectURL(file));
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden mb-4 border-2 border-gray-700">
          {preview ? (
            <Image src={preview} alt="Profil" width={96} height={96} className="object-cover w-full h-full" />
          ) : (
            <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 110 8 4 4 0 010-8zm0 12a8 8 0 018 8H4a8 8 0 018-8z" /></svg>
          )}
        </div>
        <input type="file" accept="image/png,image/jpeg" className="hidden" ref={fileInput} onChange={handleFile} />
        <button type="button" className="px-4 py-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white rounded shadow-md hover:from-green-500 hover:via-blue-600 hover:to-purple-600 font-semibold transition-colors duration-200" onClick={() => fileInput.current?.click()}>
          Upload Profile Picture
        </button>
      </div>
      <div className="flex justify-between">
        <button onClick={back} className="px-4 py-2 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-white rounded shadow-md hover:from-gray-500 hover:via-gray-700 hover:to-gray-900 font-semibold transition-colors duration-200">Back</button>
        <button onClick={next} className="px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded shadow-md hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 font-semibold transition-colors duration-200">Next</button>
      </div>
    </div>
  );
}

function passwordStrength(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

export function Step3Security({ form, update, next, back }: Step3Props) {
  type Errors = Partial<Record<keyof BuyerForm, string>>;
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof BuyerForm, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const strength = passwordStrength(form.password);

  function validate() {
    const errs: Errors = {};
    if (!form.password) errs.password = "Password required";
    else if (form.password.length < 8) errs.password = "At least 8 characters";
    if (form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match";
    if (!form.terms) errs.terms = "Accept the terms of use";
    if (!form.privacy) errs.privacy = "Accept the privacy policy";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleNext(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendError(null);
    if (!validate()) return;
    setLoading(true);
    try {
      const verifyToken = btoa(
        JSON.stringify({
          email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
        })
      );
      const verifyLink = `${window.location.origin}/buyer-registration/verify?token=${verifyToken}`;
      await emailjs.send(
        "service_helx99h",
        "template_2n6202j",
        {
          email: form.email,
          name: form.firstName + " " + form.lastName,
          website_link: verifyLink,
          company_name: "Imprezza",
          company_email: "texnovideo181@gmail.com"
        },
        "dwVr0c4cj6vN7vkSR"
      );
      setLoading(false);
      next();
    } catch (err) {
      setSendError("Verification email could not be sent. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleNext} className="space-y-6">
      <div>
        <label className="block mb-1 font-semibold text-black">Password *</label>
        <input type="password" className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.password} onChange={e => update({ password: e.target.value })} onBlur={() => setTouched(t => ({ ...t, password: true }))} />
        <div className="h-2 mt-1 w-full bg-gray-300 rounded">
          <div className={`h-2 rounded ${strength === 0 ? "bg-gray-300" : strength === 1 ? "bg-red-600 w-1/4" : strength === 2 ? "bg-yellow-600 w-2/4" : strength === 3 ? "bg-blue-800 w-3/4" : "bg-green-700 w-full"}`}></div>
        </div>
        {errors.password && touched.password && <div className="text-red-600 text-sm font-medium">{errors.password}</div>}
      </div>
      <div>
        <label className="block mb-1 font-semibold text-black">Confirm Password *</label>
        <input type="password" className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.confirmPassword} onChange={e => update({ confirmPassword: e.target.value })} onBlur={() => setTouched(t => ({ ...t, confirmPassword: true }))} />
        {errors.confirmPassword && touched.confirmPassword && <div className="text-red-600 text-sm font-medium">{errors.confirmPassword}</div>}
      </div>
      <div className="flex items-center">
        <input type="checkbox" checked={form.terms} onChange={e => update({ terms: e.target.checked })} className="mr-2 accent-black" />
        <span className="text-black">I accept the Terms of Use *</span>
      </div>
      {errors.terms && <div className="text-red-600 text-sm font-medium">{errors.terms}</div>}
      <div className="flex items-center">
        <input type="checkbox" checked={form.privacy} onChange={e => update({ privacy: e.target.checked })} className="mr-2 accent-black" />
        <span className="text-black">I accept the Privacy Policy *</span>
      </div>
      {errors.privacy && <div className="text-red-600 text-sm font-medium">{errors.privacy}</div>}
      {sendError && <div className="text-red-600 text-sm font-medium">{sendError}</div>}
      <div className="flex justify-between">
        <button onClick={back} type="button" className="px-4 py-2 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-white rounded shadow-md hover:from-gray-500 hover:via-gray-700 hover:to-gray-900 font-semibold transition-colors duration-200" disabled={loading}>Back</button>
        <button type="submit" className="px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded shadow-md hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 font-semibold transition-colors duration-200" disabled={loading}>{loading ? "Sending..." : "Next"}</button>
      </div>
    </form>
  );
}

export function Step4Verify({ form, back }: Step4Props) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
      <div className="text-lg font-bold text-black text-center">Verification email sent!</div>
      <div className="text-black text-center">Please click the verification link sent to your email address to activate your account.</div>
      <div className="flex justify-between">
        <button onClick={back} type="button" className="px-4 py-2 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-white rounded shadow-md hover:from-gray-500 hover:via-gray-700 hover:to-gray-900 font-semibold transition-colors duration-200">Back</button>
      </div>
    </div>
  );
}
