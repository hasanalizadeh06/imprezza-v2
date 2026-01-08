"use client";
import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export function Step1Artist({ form, update, next }: any) {
  const [errors, setErrors] = useState<any>({});
  const professions = [
    "Painter", "Sculptor", "Photographer", "Musician", "Dancer", "Writer", "Filmmaker", "Designer", "Other"
  ];

  function validate() {
    const errs: any = {};
    if (!form.firstName) errs.firstName = "First name required";
    if (!form.lastName) errs.lastName = "Last name required";
    if (!form.username) errs.username = "Username required";
    if (!form.profession) errs.profession = "Profession required";
    if (!form.email) errs.email = "Email required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone) errs.phone = "Phone required";
    else if (!/^\+?\d{10,15}$/.test(form.phone)) errs.phone = "Invalid phone";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) next();
  }

  return (
    <form onSubmit={handleNext} className="space-y-6">
      <div>
        <label className="block mb-1 font-semibold text-black">First Name *</label>
        <input className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.firstName} onChange={e => update({ firstName: e.target.value })} />
        {errors.firstName && <div className="text-red-600 text-sm font-medium">{errors.firstName}</div>}
      </div>
      <div>
        <label className="block mb-1 font-semibold text-black">Last Name *</label>
        <input className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.lastName} onChange={e => update({ lastName: e.target.value })} />
        {errors.lastName && <div className="text-red-600 text-sm font-medium">{errors.lastName}</div>}
      </div>
      <div>
        <label className="block mb-1 font-semibold text-black">Username *</label>
        <input className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.username} onChange={e => update({ username: e.target.value })} />
        {errors.username && <div className="text-red-600 text-sm font-medium">{errors.username}</div>}
      </div>
      <div>
        <label className="block mb-1 font-semibold text-black">Profession *</label>
        <select className="w-full border border-gray-700 rounded px-3 py-2 text-black bg-white focus:border-black" value={form.profession} onChange={e => update({ profession: e.target.value })}>
          <option value="">Select Profession</option>
          {professions.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        {errors.profession && <div className="text-red-600 text-sm font-medium">{errors.profession}</div>}
      </div>
      <div>
        <label className="block mb-1 font-semibold text-black">Specialty (optional)</label>
        <input className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.specialty} onChange={e => update({ specialty: e.target.value })} />
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
      <button type="submit" className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-2 rounded shadow-md hover:from-green-600 hover:via-blue-600 hover:to-purple-600 font-semibold transition-colors duration-200">Next</button>
    </form>
  );
}

export function Step2ArtistProfile({ form, update, next, back }: any) {
  const [preview, setPreview] = React.useState<string | null>(form.profilePic ? URL.createObjectURL(form.profilePic) : null);
  const [error, setError] = React.useState<string | null>(null);
  const fileInput = React.useRef<HTMLInputElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!["image/png", "image/jpeg"].includes(file.type)) {
      setError("Only PNG or JPEG allowed");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("Max file size: 2MB");
      return;
    }
    setError(null);
    update({ profilePic: file });
    setPreview(URL.createObjectURL(file));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden mb-4 border-2 border-gray-700">
          {preview ? (
            <Image src={preview} alt="Profile" width={96} height={96} className="object-cover w-full h-full" />
          ) : (
            <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 110 8 4 4 0 010-8zm0 12a8 8 0 018 8H4a8 8 0 018-8z" /></svg>
          )}
        </div>
        <input type="file" accept="image/png,image/jpeg" className="hidden" ref={fileInput} onChange={handleFile} />
        <button type="button" className="px-4 py-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white rounded shadow-md hover:from-green-500 hover:via-blue-600 hover:to-purple-600 font-semibold transition-colors duration-200" onClick={() => fileInput.current?.click()}>
          Upload Profile Picture
        </button>
        <div className="text-xs text-gray-500 mt-2">Min. 300x300px, max 2MB, professional photo recommended.</div>
        {error && <div className="text-red-600 text-sm font-medium mt-2">{error}</div>}
      </div>
      <div className="flex justify-between">
        <button onClick={back} className="px-4 py-2 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-white rounded shadow-md hover:from-gray-500 hover:via-gray-700 hover:to-gray-900 font-semibold transition-colors duration-200">Back</button>
        <button onClick={next} className="px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded shadow-md hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 font-semibold transition-colors duration-200">Next</button>
      </div>
    </div>
  );
}

export function Step3ArtistSecurity({ form, update, next, back }: any) {
  const [errors, setErrors] = React.useState<any>({});
  const [touched, setTouched] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const [sendError, setSendError] = React.useState<string | null>(null);

  function validate() {
    const errs: any = {};
    if (!form.password) errs.password = "Password required";
    else if (form.password.length < 8) errs.password = "At least 8 characters";
    if (form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match";
    if (!form.terms) errs.terms = "Accept the artist terms";
    if (!form.commission) errs.commission = "Accept the commission structure";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleNext(e: React.FormEvent) {
    e.preventDefault();
    setSendError(null);
    if (!validate()) return;
    setLoading(true);
    try {
      const verifyToken = btoa(
        JSON.stringify({
          email: form.email,
          password: form.password,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          username: form.username
        })
      );
      const verifyLink = `${window.location.origin}/artist-registration/verify?token=${verifyToken}`;
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

  function passwordStrength(pw: string) {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  }
  const strength = passwordStrength(form.password);

  return (
    <form onSubmit={handleNext} className="space-y-6">
      <div>
        <label className="block mb-1 font-semibold text-black">Password *</label>
        <input type="password" className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.password} onChange={e => update({ password: e.target.value })} onBlur={() => setTouched((t: any) => ({ ...t, password: true }))} />
        <div className="h-2 mt-1 w-full bg-gray-300 rounded">
          <div className={`h-2 rounded ${strength === 0 ? "bg-gray-300" : strength === 1 ? "bg-red-600 w-1/4" : strength === 2 ? "bg-yellow-600 w-2/4" : strength === 3 ? "bg-blue-800 w-3/4" : "bg-green-700 w-full"}`}></div>
        </div>
        {errors.password && touched.password && <div className="text-red-600 text-sm font-medium">{errors.password}</div>}
      </div>
      <div>
        <label className="block mb-1 font-semibold text-black">Confirm Password *</label>
        <input type="password" className="w-full border border-gray-700 rounded px-3 py-2 text-black placeholder-gray-500 bg-white focus:border-black" value={form.confirmPassword} onChange={e => update({ confirmPassword: e.target.value })} onBlur={() => setTouched((t: any) => ({ ...t, confirmPassword: true }))} />
        {errors.confirmPassword && touched.confirmPassword && <div className="text-red-600 text-sm font-medium">{errors.confirmPassword}</div>}
      </div>
      <div className="flex items-center">
        <input type="checkbox" checked={form.terms} onChange={e => update({ terms: e.target.checked })} className="mr-2 accent-black" />
        <span className="text-black">I accept the <a href="/artist-terms" target="_blank" className="underline">Artist Terms & Conditions</a> *</span>
      </div>
      {errors.terms && <div className="text-red-600 text-sm font-medium">{errors.terms}</div>}
      <div className="flex items-center">
        <input type="checkbox" checked={form.commission} onChange={e => update({ commission: e.target.checked })} className="mr-2 accent-black" />
        <span className="text-black">I agree to the platform commission structure *</span>
      </div>
      {errors.commission && <div className="text-red-600 text-sm font-medium">{errors.commission}</div>}
      {sendError && <div className="text-red-600 text-sm font-medium">{sendError}</div>}
      <div className="flex justify-between">
        <button onClick={back} type="button" className="px-4 py-2 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-white rounded shadow-md hover:from-gray-500 hover:via-gray-700 hover:to-gray-900 font-semibold transition-colors duration-200" disabled={loading}>Back</button>
        <button type="submit" className="px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded shadow-md hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 font-semibold transition-colors duration-200" disabled={loading}>{loading ? "Sending..." : "Next"}</button>
      </div>
    </form>
  );
}

export function Step4ArtistVerify({ form, back }: any) {
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
