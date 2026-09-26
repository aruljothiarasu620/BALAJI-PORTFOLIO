import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  Instagram, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  MessageCircle,
  Clock,
  ShieldCheck,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClick, playExportComplete } from '../utils/audioFx';

interface ContactExportProps {
  preselectedService?: string;
}

export const ContactExport: React.FC<ContactExportProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: preselectedService || 'Instagram Reel (9:16)',
    deadline: 'Flexible (1-2 Weeks)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = "balajilatha406@gmail.com";
  const phone = "+91 98406 02461";
  const rawPhone = "919840602461";
  const instagram = "@bala_xji";
  const instagramUrl = "https://www.instagram.com/bala_xji/";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playExportComplete();

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // Ignore
      }

      // Prefill WhatsApp text
      const text = encodeURIComponent(
        `Hi Balaji! I saw your Video Editor Portfolio.\n\n` +
        `*Client Name:* ${formData.name || 'Anonymous'}\n` +
        `*Email:* ${formData.email || 'N/A'}\n` +
        `*Project Type:* ${formData.projectType}\n` +
        `*Timeline:* ${formData.deadline}\n` +
        `*Project Details:* ${formData.message || 'Looking forward to working together!'}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
      }, 700);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#07080B] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Send className="w-4 h-4" />
              <span>PROJECT INQUIRY & BOOKING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              LET'S WORK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">TOGETHER</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Ready to elevate your visual content? Send a message for a custom quote and timeline turnaround.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVERAGE RESPONSE: WITHIN 2 HOURS</span>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel-glow rounded-3xl p-7 sm:p-8 border border-white/10 shadow-2xl space-y-7">
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold block">
                  FASTEST REACH
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Get in touch directly
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Have an urgent cut or project brief? Reach out directly via WhatsApp for immediate turnaround confirmation.
                </p>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${rawPhone}?text=Hi%20Balaji!%20I%20am%20interested%20in%20your%20video%20editing%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/40 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium uppercase">WHATSAPP / PHONE</span>
                      <span className="text-white group-hover:text-emerald-300 transition-colors text-sm font-semibold">
                        {phone}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${email}?subject=Video%20Editing%20Project%20Inquiry`}
                  onClick={playClick}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-400/40 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium uppercase">DIRECT EMAIL</span>
                      <span className="text-white group-hover:text-cyan-300 transition-colors text-sm font-semibold">
                        {email}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/40 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium uppercase">INSTAGRAM DM</span>
                      <span className="text-white group-hover:text-purple-300 transition-colors text-sm font-semibold">
                        {instagram}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-medium uppercase">LOCATION</span>
                    <span className="text-white text-sm font-semibold">
                      Puducherry, India (Worldwide Remote)
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badge Strip */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Free consultation & initial rough draft review</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Rush 24h & 48h turnaround available</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: High-Converting Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-3xl p-7 sm:p-10 border border-white/10 shadow-2xl space-y-7">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  BOOKING FORM
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                  Start Your Next Project
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your project requirements below to receive a personalized quote and timeline estimate.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display">Inquiry Initiated!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your project details have been prepared and WhatsApp is opening now. You can also message directly anytime at <strong className="text-emerald-400">{phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5 text-xs">
                      <label className="text-slate-300 block font-medium">
                        Your Name / Brand *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Alex Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1.5 text-xs">
                      <label className="text-slate-300 block font-medium">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5 text-xs">
                      <label className="text-slate-300 block font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5 text-xs">
                      <label className="text-slate-300 block font-medium">
                        Service Required *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#10131B] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                      >
                        <option value="Instagram Reel (9:16)">Viral Instagram Reel (9:16)</option>
                        <option value="Event / Festival Aftermovie">Event / College Culturals Aftermovie</option>
                        <option value="Color Grading & Master">Cinematic Color Grading & Sound Master</option>
                        <option value="Motion Graphics & VFX">Motion Graphics & Kinetic Typography</option>
                        <option value="Monthly Retainer / Bulk Edits">Monthly Editing Retainer (Multiple Reels)</option>
                        <option value="YouTube Long-Form Cut">YouTube Long-Form Video Cut</option>
                      </select>
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="space-y-1.5 text-xs">
                    <label className="text-slate-300 block font-medium">
                      Desired Turnaround Timeline
                    </label>
                    <select
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#10131B] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                    >
                      <option value="Rush Delivery (24-48 Hours)">⚡ Rush Turnaround (24 - 48 Hours)</option>
                      <option value="Within 1 Week">Within 1 Week</option>
                      <option value="Flexible (1-2 Weeks)">Flexible (1 - 2 Weeks)</option>
                      <option value="Ongoing Monthly Project">Ongoing Monthly Retainer</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-xs">
                    <label className="text-slate-300 block font-medium">
                      Project Vision & Reference Links
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Share details about footage duration, music style preferences, or links to reference reels..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Preparing Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry & Chat on WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
