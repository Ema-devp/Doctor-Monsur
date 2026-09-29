"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, HeartPulse } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="bg-blue-600 text-white p-2 rounded-lg shadow-md shadow-blue-500/20">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 block leading-tight">
                Dr. Ahmed Rahman
              </span>
              <span className="text-xs text-blue-600 font-medium tracking-wide">
                General Physician
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <Link href="#home" className="text-blue-600 font-semibold hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="#services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="#portfolio" className="hover:text-blue-600 transition">
              Portfolio
            </Link>
            <Link href="#testimonials" className="hover:text-blue-600 transition">
              Testimonials
            </Link>
            <Link href="#booking" className="hover:text-blue-600 transition">
              Booking
            </Link>
            <Link href="#blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              aria-label="Search" 
              className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="#booking"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-md shadow-blue-600/20 transition-all hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <Link
            href="#home"
            className="block px-3 py-2 text-blue-600 font-semibold rounded-md hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block px-3 py-2 text-slate-600 font-medium rounded-md hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#services"
            className="block px-3 py-2 text-slate-600 font-medium rounded-md hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="block px-3 py-2 text-slate-600 font-medium rounded-md hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            className="block px-3 py-2 text-slate-600 font-medium rounded-md hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#booking"
            className="block px-3 py-2 text-slate-600 font-medium rounded-md hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Booking
          </Link>
          <Link
            href="#blog"
            className="block px-3 py-2 text-slate-600 font-medium rounded-md hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 text-slate-600 font-medium rounded-md hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-2">
            <Link
              href="#booking"
              className="block w-full text-center bg-blue-600 text-white font-medium py-2.5 rounded-lg shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}