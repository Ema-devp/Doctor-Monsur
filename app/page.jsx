"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Stethoscope,
  Heart,
  Award,
  ShieldCheck,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Play,
  CheckCircle2,
  ChevronRight,
  Star,
  Users,
  Building,
  UserCheck,
  X,
  Activity,
  Send,
  Check
} from "lucide-react";

export default function Home() {
  // Appointment Form State
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Video Modal State
  const [activeVideo, setActiveVideo] = useState(null);

  // Active Location Tab State
  const [selectedBranch, setSelectedBranch] = useState("main");

  // Handle Form Submit
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingDate) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased scroll-smooth selection:bg-lime-300 selection:text-slate-900">
      
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* ================= 2. HERO SECTION ================= */}
      <section id="home" className="relative bg-gradient-to-b from-slate-100 to-white overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <p className="text-xs font-semibold text-cyan-600 uppercase tracking-widest">
                  Professional Care For Your Health
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight">
                Good Health Moves <br />
                <span className="text-[#03254c] font-bold">Us Forward</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
                We provide the highest quality medical care and advanced clinical treatment for you and your family with top certified doctors and state-of-the-art facilities.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#booking"
                  className="bg-[#cbe343] hover:bg-[#b8d234] text-slate-900 font-bold text-xs uppercase px-7 py-4 shadow-lg transition tracking-wider flex items-center gap-2 group"
                >
                  <span>MAKE APPOINTMENT</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </a>
                <a
                  href="#skills"
                  className="bg-[#03254c] hover:bg-[#021a36] text-white font-bold text-xs uppercase px-7 py-4 transition tracking-wider shadow"
                >
                  OUR EXPERTISE
                </a>
              </div>
            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                  alt="Doctor Hero Banner"
                  className="w-full h-[450px] object-cover rounded-3xl shadow-2xl border-8 border-white"
                />
                
                {/* Overlay Card */}
                <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs">
                  <div className="w-12 h-12 bg-[#cbe343] text-slate-900 rounded-xl flex items-center justify-center shrink-0 font-bold text-xl">
                    +
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">25+ Years Experience</h4>
                    <p className="text-xs text-slate-500">Certified Medical Excellence</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. ABOUT & SKILLS & CERTIFICATIONS ================= */}
      <section id="skills" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-md">
              Clinical Quality &amp; Mastery
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#03254c] font-bold mt-3">
              Skills &amp; Accreditation
            </h2>
            <div className="w-16 h-1 bg-[#cbe343] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Skills Progress Bars */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                Proven Medical Excellence &amp; Precision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our surgical and diagnostic divisions follow strict internationally standardized medical protocols. We continuously train our staff to deliver exceptional patient health outcomes.
              </p>

              {/* Skill 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-800">
                  <span>Cardiovascular Surgery Success</span>
                  <span className="text-cyan-600">98%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#03254c] h-full rounded-full transition-all duration-1000 w-[98%]" />
                </div>
              </div>

              {/* Skill 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-800">
                  <span>Dental &amp; Orthodontic Rehabilitation</span>
                  <span className="text-cyan-600">95%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#cbe343] h-full rounded-full transition-all duration-1000 w-[95%]" />
                </div>
              </div>

              {/* Skill 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-800">
                  <span>Physiotherapy &amp; Recovery Rate</span>
                  <span className="text-cyan-600">92%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-600 h-full rounded-full transition-all duration-1000 w-[92%]" />
                </div>
              </div>
            </div>

            {/* Right Certifications Badges */}
            <div className="lg:col-span-6 bg-slate-50 p-8 rounded-2xl border border-slate-200/80">
              <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-600" />
                Verified Hospital Certifications
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs">JCI Accredited</h5>
                    <p className="text-[10px] text-slate-500">Joint Commission Int.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-cyan-600 shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs">ISO 9001:2024</h5>
                    <p className="text-[10px] text-slate-500">Quality Management</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#03254c] shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs">Best Clinic Award</h5>
                    <p className="text-[10px] text-slate-500">National Healthcare</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-center gap-3">
                  <Activity className="w-8 h-8 text-amber-500 shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs">FDA Approved</h5>
                    <p className="text-[10px] text-slate-500">Clinical Diagnostics</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. VIDEO TESTIMONIALS SECTION ================= */}
      <section id="testimonials" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#cbe343] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md">
              Real Patient Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3">
              Video Testimonials
            </h2>
            <div className="w-16 h-1 bg-[#cbe343] mx-auto mt-3" />
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              Watch authentic video feedback from our recovered patients about their treatment journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Video Card 1 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700/60 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
                  alt="Patient Video 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition" />
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => setActiveVideo("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")}
                  className="absolute inset-0 m-auto w-14 h-14 bg-[#cbe343] text-slate-900 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-slate-900 ml-1" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <h4 className="font-bold text-white text-base">"Extremely painless dental care!"</h4>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Sarah Johnson underwent orthopedic restoration and shares her 2-week recovery results.
                </p>
                <p className="text-xs font-bold text-[#cbe343] mt-4 uppercase">Sarah Johnson — New York</p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700/60 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
                  alt="Patient Video 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition" />
                
                <button
                  onClick={() => setActiveVideo("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")}
                  className="absolute inset-0 m-auto w-14 h-14 bg-[#cbe343] text-slate-900 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-slate-900 ml-1" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <h4 className="font-bold text-white text-base">"Cardiology team saved my life"</h4>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Michael Croft discusses his emergency cardiac surgery and ongoing wellness therapy.
                </p>
                <p className="text-xs font-bold text-[#cbe343] mt-4 uppercase">Michael Croft — Lemkeport</p>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700/60 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
                  alt="Patient Video 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition" />
                
                <button
                  onClick={() => setActiveVideo("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")}
                  className="absolute inset-0 m-auto w-14 h-14 bg-[#cbe343] text-slate-900 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-slate-900 ml-1" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <h4 className="font-bold text-white text-base">"Best Physiotherapy Experience"</h4>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Elena Vance regained complete mobility after post-accident rehabilitation therapy.
                </p>
                <p className="text-xs font-bold text-[#cbe343] mt-4 uppercase">Elena Vance — Ashlyhaven</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VIDEO MODAL POPUP ================= */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 bg-slate-800 text-white p-2 rounded-full hover:bg-red-600 transition z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={activeVideo}
                title="Patient Testimonial Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= 5. LOCATIONS & AVAILABILITY SCHEDULE ================= */}
      <section id="locations" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-md">
              Hospital Branches
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#03254c] font-bold mt-3">
              Locations &amp; Availability
            </h2>
            <div className="w-16 h-1 bg-[#cbe343] mx-auto mt-3" />
          </div>

          {/* Location Tabs */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setSelectedBranch("main")}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition ${
                selectedBranch === "main"
                  ? "bg-[#03254c] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              Main Clinic (Lemkeport)
            </button>
            <button
              onClick={() => setSelectedBranch("downtown")}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition ${
                selectedBranch === "downtown"
                  ? "bg-[#03254c] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              Downtown Medical Hub
            </button>
          </div>

          {/* Schedule Grid */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ACCEPTING PATIENTS TODAY
              </div>

              <h3 className="text-2xl font-serif font-bold text-slate-900">
                {selectedBranch === "main"
                  ? "Dr. Changes Central Medical Facility"
                  : "Downtown Specialized Dental & Cardiology Center"}
              </h3>

              <div className="space-y-2 text-xs text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-600 shrink-0" />
                  {selectedBranch === "main"
                    ? "6281 Liana Extensions, Lemkeport, Lake Ashlyhaven, NY"
                    : "104 Healthcare Boulevard, Suite 400, NY"}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                  (225) 679-9399
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                  drchanges@example.com
                </p>
              </div>
            </div>

            {/* Doctor Availability Table */}
            <div className="lg:col-span-7 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
                Real-Time Specialist Schedule
              </h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-200/60 text-xs">
                  <div>
                    <p className="font-bold text-slate-900">Dr. Ataturk Changes</p>
                    <p className="text-slate-500 text-[11px]">Chief Dental Specialist</p>
                  </div>
                  <span className="bg-lime-100 text-slate-900 font-bold px-3 py-1 rounded text-[10px]">
                    09:00 AM - 02:00 PM
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-200/60 text-xs">
                  <div>
                    <p className="font-bold text-slate-900">Dr. Ahmed Rahman</p>
                    <p className="text-slate-500 text-[11px]">Senior Cardiologist</p>
                  </div>
                  <span className="bg-cyan-100 text-cyan-900 font-bold px-3 py-1 rounded text-[10px]">
                    02:00 PM - 07:00 PM
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-200/60 text-xs">
                  <div>
                    <p className="font-bold text-slate-900">Dr. Sarah Jenkins</p>
                    <p className="text-slate-500 text-[11px]">Physiotherapist Lead</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-900 font-bold px-3 py-1 rounded text-[10px]">
                    10:00 AM - 04:00 PM
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 6. LIME APPOINTMENT FORM SECTION ================= */}
      <section id="booking" className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Background Female Doctor Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594824813571-28a77885097a?q=80&w=1600&auto=format&fit=crop"
            alt="Doctor Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
          
          {/* Lime Green Form Box */}
          <div className="bg-[#cbe343] p-8 sm:p-10 w-full max-w-md shadow-2xl text-slate-900">
            
            {!isSubmitted ? (
              <>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-slate-900 border-b border-slate-900/20 pb-3">
                  Book Appointment
                </h3>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full bg-white/95 border border-slate-400 px-4 py-3 text-xs text-slate-800 font-semibold focus:outline-none focus:bg-white"
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="surgery">Surgery &amp; Dental</option>
                    </select>
                  </div>

                  <div>
                    <select
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      className="w-full bg-white/95 border border-slate-400 px-4 py-3 text-xs text-slate-800 font-semibold focus:outline-none focus:bg-white"
                      required
                    >
                      <option value="">Select Doctor</option>
                      <option value="dr-changes">Dr. Ataturk Changes</option>
                      <option value="dr-rahman">Dr. Ahmed Rahman</option>
                    </select>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full bg-white/95 border border-slate-400 px-4 py-3 text-xs text-slate-800 font-semibold placeholder-slate-500 focus:outline-none focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full bg-white/95 border border-slate-400 px-4 py-3 text-xs text-slate-800 font-semibold placeholder-slate-500 focus:outline-none focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-white/95 border border-slate-400 px-4 py-3 text-xs text-slate-800 font-semibold focus:outline-none focus:bg-white"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#03254c] hover:bg-[#021832] text-white font-bold text-xs uppercase py-4 shadow transition tracking-widest mt-2 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>SUBMIT APPOINTMENT</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              /* Success Confirmation Card */
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-[#03254c] text-[#cbe343] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Appointment Requested!</h4>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  Thank you, <strong>{bookingName}</strong>. Our hospital reception will contact you at <strong>{bookingPhone}</strong> shortly to confirm your visit for <strong>{bookingDate}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#03254c] text-white text-xs font-bold uppercase px-6 py-3 tracking-wider mt-4"
                >
                  Book Another Session
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ================= 7. CONTACT US & MAP SECTION ================= */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-md">
                Get In Touch
              </span>
              <h2 className="text-3xl font-serif text-[#03254c] font-bold">
                Emergency Hotline &amp; Consultation
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reach our emergency front desk available 24 hours every day. Walk-in appointments are welcome for acute care.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 bg-[#03254c] text-[#cbe343] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Emergency Call</p>
                    <p className="font-bold text-slate-900 text-base">(225) 679-9399</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Email Enquiries</p>
                    <p className="font-bold text-slate-900 text-sm">drchanges@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Preview Card */}
            <div className="lg:col-span-7 bg-slate-100 h-80 rounded-2xl overflow-hidden border border-slate-200 relative flex items-center justify-center shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                alt="Map Background"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-slate-900/30" />
              
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white text-center max-w-xs">
                <MapPin className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Dr. Changes Main Center</h4>
                <p className="text-xs text-slate-500 mt-1">6281 Liana Extensions, Lemkeport, Lake Ashlyhaven, NY</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-[#03254c] text-white text-[11px] font-bold uppercase px-4 py-2 rounded transition"
                >
                  GET DIRECTIONS →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 8. FOOTER ================= */}
      <footer className="bg-[#03254c] text-white text-xs py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#cbe343] text-slate-900 font-bold flex items-center justify-center text-lg">
                  +
                </div>
                <span className="font-serif text-xl font-bold text-white">Dr. Changes</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Providing standard diagnostic and clinical healthcare solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-[#cbe343] uppercase tracking-wider text-xs mb-3">Sections</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#skills" className="hover:text-white transition">Skills &amp; Accreditation</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Video Testimonials</a></li>
                <li><a href="#locations" className="hover:text-white transition">Hospital Locations</a></li>
                <li><a href="#booking" className="hover:text-white transition">Book Appointment</a></li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="font-bold text-[#cbe343] uppercase tracking-wider text-xs mb-3">Working Hours</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Mon - Wed: 8:00 AM - 7:00 PM</li>
                <li>Thu - Fri: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 10:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-bold text-[#cbe343] uppercase tracking-wider text-xs mb-3">Contact Us</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#cbe343]" /> Lake Ashlyhaven, NY</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#cbe343]" /> (225) 679-9399</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#cbe343]" /> drchanges@example.com</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-400">
            <p>© 2026 Dr. Changes Medical Center. All rights reserved.</p>
            <p>Designed for Next.js Projects</p>
          </div>
        </div>
      </footer>

    </div>
  );
}